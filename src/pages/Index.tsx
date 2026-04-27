import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MoneyUnpackingLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [consentOffer, setConsentOffer] = useState(false)
  const [consentPd, setConsentPd] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const checkboxesRef = useRef<HTMLDivElement>(null)

  const marqueeRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const instigateRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
      setProgress(currentProgress)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector(".marquee-content")
        if (marqueeContent) {
          const marqueeWidth = marqueeContent.scrollWidth / 2

          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
          })
        }
      }

      gsap.from(heroRef.current?.querySelector(".hero-content"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(heroRef.current?.querySelector(".hero-image"), {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelector(".benefits-title"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-image"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-content"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelector("h2"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelectorAll(".desire-image"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-content"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-image"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-content"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-image"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(pricingRef.current?.querySelectorAll(".pricing-card"), {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current?.querySelector(".cta-box"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0E0E0E]">
          <div className="flex flex-col items-center gap-8 px-6">
            <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-center">
              Денежная
              <span className="block text-[#C9A84C]">Распаковка</span>
            </h1>

            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1E1E1E]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8B6914] to-[#C9A84C] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#CCCCCC]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-[#0E0E0E]">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden bg-[#8B6914] py-4">
          <div className="marquee-content flex items-center gap-4 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              i % 2 === 0 ? (
                <div key={i} className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
                  <span className="font-serif text-xs font-normal text-black md:text-sm">БОНУС: 3 ПРОШЛЫХ МЕСЯЦА</span>
                </div>
              ) : (
                <div key={i} className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
                  <span className="font-serif text-xs font-normal text-white md:text-sm">
                    ОНЛАЙН · ПРЯМОЙ ЭФИР · ЗАПИСЬ ОСТАЁТСЯ
                  </span>
                </div>
              )
            ))}
            {[...Array(6)].map((_, i) => (
              i % 2 === 0 ? (
                <div key={`d-${i}`} className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
                  <span className="font-serif text-xs font-normal text-black md:text-sm">БОНУС: 3 ПРОШЛЫХ МЕСЯЦА</span>
                </div>
              ) : (
                <div key={`d-${i}`} className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
                  <span className="font-serif text-xs font-normal text-white md:text-sm">
                    ОНЛАЙН · ПРЯМОЙ ЭФИР · ЗАПИСЬ ОСТАЁТСЯ
                  </span>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-screen lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(14, 14, 14, 0) 0%, #0E0E0E 100%), linear-gradient(190.21deg, rgba(14, 14, 14, 0) 48.79%, #0E0E0E 91.19%)`,
            backgroundColor: "#0E0E0E",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Фото Екатерины */}
            <div className="hero-image relative flex-shrink-0 w-full max-w-xs md:max-w-sm lg:max-w-md">
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="https://cdn.poehali.dev/projects/ab453e92-33dc-43b0-9e98-98fa95bc40f7/bucket/87921343-fe96-4231-b9f5-fbbbf041f30e.jpg"
                  alt="Екатерина Усова — Денежная распаковка"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Текст */}
            <div className="hero-content flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
              <span className="rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-5 py-2 text-sm text-[#C9A84C]">
                Ежемесячный онлайн-формат
              </span>
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl lg:text-[52px]">
                Денежная распаковка месяца<br />
                <span className="text-[#C9A84C]">с Екатериной Усовой</span>
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Каждый месяц - живая сессия на раскрытие денежного потенциала.
              </p>
              <p className="max-w-xl text-sm text-[#C9A84C]/80 md:text-base">
                При покупке сейчас — бонус: записи и практики за прошлые 3 месяца распаковки
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                <Button
                  className="h-12 rounded-xl bg-white px-6 font-serif text-base text-[#0E0E0E] hover:bg-white/90 md:text-lg"
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Присоединиться — от 990 ₽
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#CCCCCC] bg-transparent font-serif text-base text-white hover:bg-white/10 md:text-lg"
                  onClick={() => document.querySelector('#bonus')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть бонусы
                </Button>
              </div>
              <p className="text-xs text-white/40">Онлайн, прямой эфир. Если не получается прийти — запись остаётся у вас.</p>
            </div>
          </div>
        </section>

        {/* Benefits — Темы распаковок */}
        <section ref={benefitsRef} className="w-full px-6 py-12 md:px-20 md:py-16 lg:px-80 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <h2 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-3xl mb-2">
              Ближайшие темы денежных распаковок:
            </h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#8B6914] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-3xl">
                  Май — «страх быть богатой»
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white/80 md:text-base">
                  Разберём глубинные страхи больших денег.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#8B6914] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-3xl">
                  Июнь — «обида на деньги, как блокатор финансов»
                </h3>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#8B6914] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-3xl">
                  Июль — «деньги достаются тяжёлым трудом»
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white/80 md:text-base">
                  Проработка установки, выход из напряжения и выгорания.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About — Что происходит на встрече */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="about-content flex flex-col gap-6">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Что происходит на встрече
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Уходят страхи, ограничивающие убеждения и установки",
                  "Снижается внутреннее напряжение и контроль",
                  "Раскрывается ваша ценность и уверенность",
                  "Появляется энергия на действия и рост",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-white/80 md:text-lg">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/20 text-xs text-[#C9A84C]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-[#C9A84C]/80">
                Каждая встреча — шаг к вашему новому финансовому уровню.
              </p>
              <Button
                className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#8B6914] to-[#C9A84C] font-serif text-lg text-white hover:opacity-90 md:text-xl"
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Присоединиться
              </Button>
            </div>
          </div>
        </section>

        {/* Desire — Что меняется в результате */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[40px] border-2 border-[#1E1E1E] bg-[#0E0E0E] px-6 py-12 md:px-12 md:py-16 lg:px-24">
              <h2 className="mb-8 text-balance text-center font-serif text-3xl leading-tight tracking-tight text-white md:mb-12 md:text-4xl lg:text-[56px]">
                Что меняется в результате
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {[
                  { icon: "✦", text: "Начинают приходить новые возможности" },
                  { icon: "✦", text: "Появляются клиенты и идеи" },
                  { icon: "✦", text: "Становится больше внутренней опоры" },
                  { icon: "✦", text: "Деньги перестают быть темой выживания" },
                ].map((item, i) => (
                  <div key={i} className="desire-image flex items-start gap-4 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#1a1500] to-[#0E0E0E] p-6 md:p-8">
                    <span className="text-2xl text-[#C9A84C]">{item.icon}</span>
                    <p className="text-base leading-relaxed text-white md:text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instigate — Почему важно 3 месяца */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="instigate-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Почему важно идти на 3 месяца
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Деньги - это отражение вашего внутреннего состояния.
              </p>
            </div>
            <div className="instigate-image grid w-full gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-[#111111] p-6 md:p-8">
                <h3 className="font-serif text-xl text-white/60">1 месяц</h3>
                <ul className="flex flex-col gap-2">
                  {["Даёт инсайт", "Помогает увидеть свои блоки", "Запускает движение"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70 md:text-base">
                      <span className="text-[#C9A84C]">→</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-[30px] border border-[#C9A84C]/30 bg-gradient-to-br from-[#1a1500] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-xl text-[#C9A84C]">3 месяца</h3>
                <ul className="flex flex-col gap-2">
                  {["Даёт последовательную трансформацию", "Закрепляет результат", "Выводит на новый уровень мышления и дохода"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white md:text-base">
                      <span className="text-[#C9A84C]">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why — Бонус */}
        <section id="bonus" ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="why-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Бонус при покупке
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                При покупке вы получаете прошлые <strong className="text-white font-bold">3 месяца распаковки</strong> + <strong className="text-white font-bold">аудио-практики</strong> в подарок.
              </p>
            </div>
            <div className="why-image w-full">
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
                <p className="mb-3 text-sm text-white/50 uppercase tracking-widest">Аудио-практики</p>
                <div className="flex flex-wrap gap-2">
                  {["Внутренний ребёнок", "Проработка финансовых ограничений", "Раскрытие женской сексуальной энергии"].map((p, i) => (
                    <span key={i} className="rounded-full border border-[#C9A84C]/30 px-4 py-1.5 text-sm text-[#C9A84C]">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Выберите формат участия
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Card 1 — Месяц */}
              <Card className="pricing-card flex flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-6 shadow-lg md:p-8">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                    Участие на месяц
                  </h3>
                  <p className="text-sm text-white/40">Мягкий вход</p>
                </div>
                <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">990 <span className="text-2xl font-normal">₽</span></p>
                <ul className="flex flex-col gap-2">
                  {["1 онлайн-сессия месяца", "Запись текущего эфира", "Подходит для мягкого входа"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70 md:text-base">
                      <span className="text-[#C9A84C]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    if (!consentOffer || !consentPd) {
                      setShowErrors(true)
                      checkboxesRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                    } else {
                      window.open("https://paylink.tbank.ru/8be3f88c-8757-4edd-a1a1-c71b3e5e9f1a", "_blank", "noopener,noreferrer")
                    }
                  }}
                  className={`mt-auto h-12 w-full rounded-xl text-base font-medium md:text-lg transition-all ${consentOffer && consentPd ? "bg-white/10 text-white hover:bg-white/20 cursor-pointer" : "bg-white/5 text-white/30 cursor-not-allowed"}`}
                >
                  Выбрать месяц
                </Button>
              </Card>

              {/* Card 2 — 3 месяца (featured) */}
              <Card className="pricing-card flex flex-col gap-6 rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-br from-[#2a1f00] to-[#0E0E0E] p-6 shadow-lg md:p-8">
                <div>
                  <span className="rounded-full bg-[#C9A84C] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-black">
                    самый выгодный вариант
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                    Система на 3 месяца
                  </h3>
                  <p className="text-sm text-[#C9A84C]/60">Глубокая трансформация</p>
                </div>
                <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">2 500 <span className="text-2xl font-normal">₽</span></p>
                <ul className="flex flex-col gap-2">
                  {["3 месяца участия подряд", "Глубокая последовательная трансформация", "Бонус: прошлые 3 месяца распаковок"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white md:text-base">
                      <span className="text-[#C9A84C]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    if (!consentOffer || !consentPd) {
                      setShowErrors(true)
                      checkboxesRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                    } else {
                      window.open("https://paylink.tbank.ru/8be3f88c-8757-4edd-a1a1-c71b3e5e9f1a", "_blank", "noopener,noreferrer")
                    }
                  }}
                  className={`mt-auto h-12 w-full rounded-xl text-base font-medium md:text-lg transition-all ${consentOffer && consentPd ? "bg-gradient-to-r from-[#8B6914] to-[#C9A84C] text-white hover:opacity-90 cursor-pointer" : "bg-white/5 text-white/30 cursor-not-allowed"}`}
                >
                  Взять 3 месяца
                </Button>
              </Card>
            </div>
            <div ref={checkboxesRef} className="mt-6 flex flex-col gap-3">
              <div className={`flex items-start gap-3 rounded-lg p-2 transition-all ${showErrors && !consentOffer ? "outline outline-2 outline-red-500/70 bg-red-500/5" : "outline outline-2 outline-transparent"}`}>
                <input
                  id="consent-offer"
                  type="checkbox"
                  checked={consentOffer}
                  onChange={(e) => { setConsentOffer(e.target.checked); if (e.target.checked && consentPd) setShowErrors(false) }}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#C9A84C]"
                />
                <label htmlFor="consent-offer" className="cursor-pointer text-xs leading-relaxed text-white/40">
                  Я принимаю условия{" "}
                  <a href="https://disk.yandex.ru/i/IIHqhySXcAvRRw" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                    Публичной оферты
                  </a>
                </label>
              </div>
              <div className={`flex items-start gap-3 rounded-lg p-2 transition-all ${showErrors && !consentPd ? "outline outline-2 outline-red-500/70 bg-red-500/5" : "outline outline-2 outline-transparent"}`}>
                <input
                  id="consent-pd"
                  type="checkbox"
                  checked={consentPd}
                  onChange={(e) => { setConsentPd(e.target.checked); if (e.target.checked && consentOffer) setShowErrors(false) }}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#C9A84C]"
                />
                <label htmlFor="consent-pd" className="cursor-pointer text-xs leading-relaxed text-white/40">
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  <a href="https://disk.yandex.ru/i/1PRysFhwnwEl7A" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                    Политикой обработки и защиты ПД
                  </a>
                  {" "}и{" "}
                  <a href="https://disk.yandex.ru/i/bXXbgdXmWPdmfQ" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                    Согласием на обработку ПД
                  </a>
                </label>
              </div>
              <div className="flex items-start gap-3 rounded-lg p-2">
                <input
                  id="consent-promo"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#C9A84C]"
                />
                <label htmlFor="consent-promo" className="cursor-pointer text-xs leading-relaxed text-white/40">
                  Я даю{" "}
                  <a href="https://disk.yandex.ru/i/T91bY6fjpNWJVA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                    согласие на получение рекламной и информационной рассылки
                  </a>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#8B6914] to-[#C9A84C] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Денег много и они для тебя - СОЗДАВАЙ!
              </p>
              <div className="flex w-full flex-col gap-3 md:w-auto">
                <Button asChild className="h-12 w-full rounded-xl bg-[#0E0E0E] text-base text-white hover:bg-[#0E0E0E]/90 md:w-auto md:px-8 md:text-lg">
                  <a href="https://t.me/usova_ekaterina_provodnik" target="_blank" rel="noopener noreferrer">Записаться в Telegram</a>
                </Button>

              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#333333] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <p className="text-center text-sm leading-relaxed tracking-tight text-white/40 md:text-base">
              2026 — Екатерина Усова. Все права защищены.
            </p>
            <p className="text-center text-xs leading-relaxed text-white/25">
              ИП Усова Екатерина Николаевна · ИНН 252150169800 · ОГРНИП 326253600044992
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}