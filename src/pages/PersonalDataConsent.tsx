import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function PersonalDataConsent() {
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
          Согласие на обработку персональных данных
        </h1>

        <div className="flex flex-col gap-6 text-sm leading-relaxed text-white/70 md:text-base">
          <p className="text-white/40 text-xs">Дата публикации: 24 апреля 2026 г.</p>

          <p>
            Настоящим я, субъект персональных данных, даю своё согласие ИП Усовой Екатерине Николаевне
            (ИНН 252150169800, ОГРНИП 326253600044992), далее — Оператор, на обработку моих персональных данных
            на следующих условиях.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">1. Перечень персональных данных</h2>
            <p>Я даю согласие на обработку следующих персональных данных:</p>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— имя и фамилия;</li>
              <li>— адрес электронной почты;</li>
              <li>— номер телефона;</li>
              <li>— иные данные, добровольно указанные мной.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">2. Цели обработки</h2>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— обработка заявок на участие в программах Оператора;</li>
              <li>— информирование об услугах и мероприятиях;</li>
              <li>— исполнение договорных обязательств;</li>
              <li>— улучшение качества сервиса.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">3. Способы обработки</h2>
            <p>
              Сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача
              (при наличии правового основания), обезличивание, блокирование, удаление и уничтожение
              персональных данных с использованием средств автоматизации и без таковых.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">4. Срок хранения</h2>
            <p>
              Персональные данные хранятся в течение срока, необходимого для достижения указанных целей,
              но не более трёх лет с момента их предоставления, либо до отзыва согласия.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">5. Отзыв согласия</h2>
            <p>
              Я вправе в любое время отозвать настоящее согласие, направив соответствующее уведомление
              Оператору через Telegram-канал. После отзыва согласия Оператор обязуется прекратить обработку
              и уничтожить персональные данные в срок не позднее 30 дней.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">6. Правовая основа</h2>
            <p>
              Обработка осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
              «О персональных данных».
            </p>
          </section>

          <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white/50">
            Оставляя свои данные на сайте, вы подтверждаете, что ознакомились с настоящим согласием
            и принимаете его условия.
          </p>
        </div>
      </div>
    </div>
  )
}
