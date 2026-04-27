import json
import os
import hashlib
import requests

def handler(event: dict, context) -> dict:
    """Создаёт платёж через T-Bank API и возвращает ссылку на оплату."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    try:
        body = json.loads(event.get('body') or '{}')
        amount = body.get('amount')
        description = body.get('description', 'Оплата тарифа')
        order_id = body.get('order_id', '')

        if not amount or not order_id:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': False, 'error': 'Не указана сумма или номер заказа'})
            }

        terminal_key = os.environ['TBANK_TERMINAL_KEY']
        password = os.environ['TBANK_PASSWORD']

        token_values = sorted([terminal_key, password, str(amount), str(order_id)])
        token_string = ''.join(token_values)
        token = hashlib.sha256(token_string.encode()).hexdigest()

        payload = {
            'TerminalKey': terminal_key,
            'Amount': amount,
            'OrderId': order_id,
            'Description': description,
            'Token': token
        }

        response = requests.post(
            'https://securepay.tinkoff.ru/v2/Init',
            json=payload,
            timeout=15
        )
        result = response.json()

        if result.get('Success') and result.get('PaymentURL'):
            return {
                'statusCode': 200,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'payment_url': result['PaymentURL']})
            }
        else:
            error_msg = result.get('Message', 'Неизвестная ошибка T-Bank')
            return {
                'statusCode': 200,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': False, 'error': error_msg})
            }

    except requests.exceptions.Timeout:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': False, 'error': 'Сервис оплаты не отвечает, попробуйте позже'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': False, 'error': str(e)})
        }
