import Image from 'next/image'
import { ArrowRight, Phone, BadgeCheck, GraduationCap, ShieldCheck, BriefcaseBusiness } from 'lucide-react'

const features = [
  { id: 1, title: 'Expertise reconnue', sub: "15+ ans d'expérience", icon: BadgeCheck },
  { id: 2, title: 'Formation & accompagnement', sub: 'Équipes et dirigeants', icon: GraduationCap },
  { id: 3, title: 'Conformité réglementaire', sub: 'Normes HACCP & ISO', icon: ShieldCheck },
  { id: 4, title: 'Conseil opérationnel', sub: 'Sur mesure & terrain', icon: BriefcaseBusiness },
]

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-2'>

        {/* LEFT CONTENT */}
        <div className='flex items-center'>
          <div className='mx-auto w-full max-w-7xl px-4 lg:px-8'>
            <div className='max-w-2xl pt-10 pb-8 lg:py-0'>

              {/* BADGE */}
              <span className='mb-6 inline-flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700'>
                <BadgeCheck size={13} />
                Audit · Conseil · Accompagnement
              </span>

              {/* TITLE */}
              <h1 className='text-4xl font-black leading-[1.15] tracking-tight text-gray-900 lg:text-6xl'>
                Vers l'excellence<br />
                opérationnelle et la{' '}
                <span className='text-[#0f7a3d]'>conformité alimentaire</span>
              </h1>

              {/* MOBILE IMAGE — visible only on small screens */}
              <div className='relative mt-6 block lg:hidden'>
                {/* image with rounded corners and fixed height */}
                <div className='relative h-52 w-full overflow-hidden rounded-2xl'>
                  <Image
                    src='/assets/hero.png'
                    alt='Food safety'
                    fill
                    priority
                    className='object-cover object-center'
                  />
                  {/* dark gradient at bottom for card readability */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />
                </div>

                {/* MISSION CARD pinned inside image bottom */}
                <div className='absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md'>
                  <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0f7a3d]/10'>
                    <ShieldCheck size={18} className='text-[#0f7a3d]' />
                  </div>
                  <div>
                    <p className='text-xs font-bold text-gray-900'>Notre mission</p>
                    <p className='text-[11px] leading-4 text-gray-500'>
                      Sécurité alimentaire & performance continue.
                    </p>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-6 max-w-xl text-base leading-7 text-gray-500'>
                Nous accompagnons les entreprises de l'agroalimentaire,
                de l'hôtellerie-restauration, de la production et de la
                distribution dans l'optimisation de leurs processus,
                la conformité réglementaire et l'amélioration continue
                de leurs performances.
              </p>

              {/* BUTTONS */}
              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <button className='group flex items-center gap-2.5 rounded-xl bg-[#0f7a3d] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b6633]'>
                  Découvrir nos services
                  <ArrowRight size={16} className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </button>
                <button className='flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50'>
                  Nous contacter
                  <Phone size={16} className='text-[#0f7a3d]' />
                </button>
              </div>

              {/* FEATURES */}
              <div className='mt-8 grid grid-cols-2 gap-3 pb-10 lg:mt-12 lg:pb-0'>
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={feature.id}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3'
                    >
                      <div className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50'>
                        <Icon size={16} className='text-[#0f7a3d]' />
                      </div>
                      <div>
                        <p className='text-xs font-semibold leading-5 text-gray-800'>{feature.title}</p>
                        <p className='text-xs leading-5 text-gray-500'>{feature.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE — desktop only */}
        <div className='relative hidden lg:block'>

          {/* GREEN FADE */}
          <div className='absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent' />

          {/* IMAGE */}
          <Image
            src='/assets/hero.png'
            alt='Food safety'
            fill
            priority
            className='object-cover'
          />

          {/* OVERLAY CARD */}
          <div className='absolute bottom-10 left-10 z-20 max-w-xs rounded-3xl border border-white/30 bg-white/90 p-6 shadow-2xl backdrop-blur-xl'>
            <div className='flex items-start gap-4'>
              <div className='grid h-14 w-14 place-items-center rounded-2xl bg-[#0f7a3d]/10'>
                <ShieldCheck size={28} className='text-[#0f7a3d]' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-gray-900'>Notre mission</h3>
                <p className='mt-2 text-sm leading-6 text-gray-600'>
                  Garantir la sécurité alimentaire et améliorer
                  continuellement vos performances.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero