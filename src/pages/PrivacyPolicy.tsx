import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] px-6 py-16 text-white md:px-20 lg:px-[420px]">
      <div className="mx-auto max-w-3xl">
        <Link to="/">
          <Button
            variant="outline"
            className="mb-10 border-white/20 bg-transparent text-white/60 hover:bg-white/10 hover:text-white"
          >
            ← На главную
          </Button>
        </Link>

        <h1 className="mb-8 font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Политика конфиденциальности
        </h1>

        <div className="flex flex-col gap-6 text-sm leading-relaxed text-white/70 md:text-base">
          <p className="text-white/40 text-xs">Дата публикации: 24 апреля 2026 г.</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей
              сайта, принадлежащего ИП Усовой Екатерине Николаевне (ИНН 252150169800, ОГРНИП 326253600044992),
              далее — Оператор.
            </p>
            <p>
              Используя сайт и оставляя свои данные, вы выражаете согласие с настоящей Политикой.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">2. Какие данные мы собираем</h2>
            <p>Оператор может собирать следующие персональные данные:</p>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— имя и фамилия;</li>
              <li>— адрес электронной почты;</li>
              <li>— номер телефона;</li>
              <li>— иные данные, добровольно предоставленные пользователем.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">3. Цели обработки данных</h2>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— обработка заявок и обращений;</li>
              <li>— информирование о программах и мероприятиях Оператора;</li>
              <li>— исполнение договорных обязательств;</li>
              <li>— улучшение качества сервиса.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">4. Основания обработки</h2>
            <p>
              Обработка персональных данных осуществляется на основании согласия субъекта персональных данных
              (ст. 9 Федерального закона № 152-ФЗ «О персональных данных»).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">5. Передача данных третьим лицам</h2>
            <p>
              Оператор не передаёт персональные данные третьим лицам без согласия пользователя, за исключением
              случаев, предусмотренных действующим законодательством Российской Федерации.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">6. Хранение и защита данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных данных
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">7. Права пользователя</h2>
            <p>Пользователь вправе:</p>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— получить информацию об обработке своих данных;</li>
              <li>— потребовать их уточнения, блокировки или уничтожения;</li>
              <li>— отозвать согласие на обработку в любой момент.</li>
            </ul>
            <p>
              Для реализации прав обращайтесь через Telegram-канал Екатерины Усовой.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">8. Изменение политики</h2>
            <p>
              Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия
              всегда доступна на сайте.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
