import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function PublicOffer() {
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
          Публичная оферта
        </h1>

        <div className="flex flex-col gap-6 text-sm leading-relaxed text-white/70 md:text-base">
          <p className="text-white/40 text-xs">Дата публикации: 24 апреля 2026 г.</p>

          <p>
            ИП Усова Екатерина Николаевна (ИНН 252150169800, ОГРНИП 326253600044992), далее — Исполнитель,
            адресует настоящее предложение любому физическому лицу, далее — Заказчик, и предлагает заключить
            договор на условиях, изложенных ниже.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">1. Предмет договора</h2>
            <p>
              Исполнитель оказывает Заказчику информационно-консультационные услуги в рамках онлайн-программы
              «Денежная Распаковка» в выбранном формате (1 месяц или 3 месяца).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">2. Акцепт оферты</h2>
            <p>
              Акцептом настоящей оферты является совершение Заказчиком оплаты услуг. С момента поступления
              оплаты договор считается заключённым на условиях настоящей оферты.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">3. Стоимость и порядок оплаты</h2>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— Участие на 1 месяц — 990 ₽;</li>
              <li>— Участие на 3 месяца — 2 500 ₽.</li>
            </ul>
            <p>
              Оплата производится единовременно до начала оказания услуг через платёжные сервисы,
              доступные на сайте.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">4. Порядок оказания услуг</h2>
            <p>
              Услуги оказываются в формате онлайн-сессий в прямом эфире согласно расписанию программы.
              Заказчику предоставляется доступ к записям текущего периода участия.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">5. Права и обязанности сторон</h2>
            <p className="font-medium text-white/80">Исполнитель обязуется:</p>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— провести онлайн-сессии в заявленные даты;</li>
              <li>— предоставить Заказчику доступ к записям;</li>
              <li>— информировать о переносах мероприятий заблаговременно.</li>
            </ul>
            <p className="mt-2 font-medium text-white/80">Заказчик обязуется:</p>
            <ul className="flex flex-col gap-1 pl-4">
              <li>— своевременно производить оплату;</li>
              <li>— не распространять записи и материалы программы третьим лицам.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">6. Возврат денежных средств</h2>
            <p>
              Возврат возможен до начала первой сессии оплаченного периода. После начала сессии денежные
              средства возврату не подлежат. Для оформления возврата необходимо обратиться к Исполнителю
              через Telegram.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">7. Ответственность сторон</h2>
            <p>
              Исполнитель не несёт ответственности за результаты, которые Заказчик ожидал, но не достиг,
              поскольку результат зависит от личного участия и применения полученных знаний.
              Информационно-консультационные услуги не являются психологической, юридической или
              финансовой помощью.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">8. Конфиденциальность</h2>
            <p>
              Обработка персональных данных Заказчика осуществляется в соответствии с Политикой
              конфиденциальности, размещённой на сайте.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">9. Срок действия оферты</h2>
            <p>
              Оферта действует с момента публикации на сайте до её отзыва Исполнителем.
              Исполнитель вправе вносить изменения в условия оферты, уведомив об этом на сайте.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">10. Применимое право</h2>
            <p>
              К отношениям сторон применяется законодательство Российской Федерации.
              Все споры разрешаются путём переговоров, а при недостижении соглашения —
              в судебном порядке по месту нахождения Исполнителя.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
