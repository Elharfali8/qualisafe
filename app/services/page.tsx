import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  Factory,
  SearchCheck,
  Users,
  CheckCircle2,
  BriefcaseBusiness,
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Audit & Analyse',
    desc: 'Évaluation complète de vos pratiques, installations et systèmes qualité afin d’identifier les risques et les axes d’amélioration.',
    icon: SearchCheck,
  },
  {
    id: 2,
    title: 'Conseil',
    desc: 'Accompagnement stratégique et opérationnel pour optimiser vos performances et garantir votre conformité.',
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: 'Formation',
    desc: 'Formation des équipes aux bonnes pratiques d’hygiène, sécurité alimentaire et conformité réglementaire.',
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'Accompagnement',
    desc: 'Suivi personnalisé dans la mise en place de solutions correctives et préventives adaptées.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Certification',
    desc: 'Préparation et assistance pour les audits de certification HACCP, ISO 22000, BRC et IFS.',
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: 'Gestion Qualité',
    desc: 'Mise en place de systèmes qualité performants pour garantir l’amélioration continue.',
    icon: ClipboardCheck,
  },
]

const process = [
  {
    id: 1,
    title: 'Analyse & Diagnostic',
    desc: 'Étude approfondie de vos besoins et de votre environnement.',
  },
  {
    id: 2,
    title: 'Plan d’action',
    desc: 'Élaboration de solutions adaptées à votre activité.',
  },
  {
    id: 3,
    title: 'Mise en œuvre',
    desc: 'Accompagnement opérationnel et suivi terrain.',
  },
  {
    id: 4,
    title: 'Suivi & Optimisation',
    desc: 'Contrôle des résultats et amélioration continue.',
  },
]

const normes = [
  'HACCP',
  'ISO 22000',
  'BRC',
  'IFS',
  'Réglementations locales',
]

const ServicesPage = () => {
  return (
    <main className='bg-white'>
      
      {/* HERO */}
      <section className='relative overflow-hidden bg-[#f8faf8] py-28'>
        
        {/* BACKGROUND */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%)]' />

        <Image
          src='/assets/leaf-1.svg'
          alt=''
          width={260}
          height={260}
          className='pointer-events-none absolute left-0 top-1/2 opacity-[0.05]'
        />

        <Image
          src='/assets/leaf-2.svg'
          alt=''
          width={320}
          height={320}
          className='pointer-events-none absolute bottom-0 right-0 opacity-[0.05]'
        />

        <div className='relative z-10 mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='grid items-center gap-16 lg:grid-cols-2'>
            
            {/* LEFT */}
            <div>
              <span className='inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                Nos services
              </span>

              <h1 className='mt-6 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl'>
                Des solutions adaptées à vos{' '}
                <span className='text-[#0f7a3d]'>
                  besoins professionnels
                </span>
              </h1>

              <p className='mt-8 max-w-2xl text-lg leading-8 text-gray-600'>
                Nous accompagnons les entreprises de
                l’agroalimentaire, de l’hôtellerie et
                de la restauration dans leurs démarches
                qualité, sécurité alimentaire et conformité.
              </p>

              {/* CTA */}
              <div className='mt-10 flex flex-wrap items-center gap-4'>
                
                <button className='group flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
                  Demander un audit

                  <ArrowRight
                    size={18}
                    className='transition-transform duration-300 group-hover:translate-x-1'
                  />
                </button>

                <button className='rounded-2xl border border-green-100 bg-white px-7 py-4 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-[#0f7a3d] hover:text-[#0f7a3d]'>
                  Nous contacter
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl'>
              <Image
                src='/assets/services-hero.png'
                alt='Services'
                fill
                className='object-cover'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

              {/* FLOATING CARD */}
              <div className='absolute bottom-8 left-8 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl'>
                <div className='flex items-start gap-4'>
                  
                  <div className='grid h-14 w-14 place-items-center rounded-2xl bg-green-100'>
                    <Factory
                      size={28}
                      className='text-[#0f7a3d]'
                    />
                  </div>

                  <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                      Sécurité & conformité
                    </h3>

                    <p className='mt-2 max-w-xs text-sm leading-6 text-gray-600'>
                      Des solutions concrètes pour améliorer vos performances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          {/* HEADER */}
          <div className='mx-auto max-w-3xl text-center'>
            <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
              Expertise & accompagnement
            </span>

            <h2 className='mt-4 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl'>
              Nos domaines d’intervention
            </h2>

            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Une expertise complète pour répondre
              aux exigences des professionnels.
            </p>
          </div>

          {/* CARDS */}
          <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.id}
                  className='group rounded-[32px] border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <div className='grid h-16 w-16 place-items-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-[#0f7a3d]'>
                    <Icon
                      size={30}
                      className='text-[#0f7a3d] transition-colors duration-300 group-hover:text-white'
                    />
                  </div>

                  <h3 className='mt-8 text-2xl font-bold text-gray-900'>
                    {service.title}
                  </h3>

                  <p className='mt-4 leading-7 text-gray-600'>
                    {service.desc}
                  </p>

                  <button className='group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7a3d]'>
                    En savoir plus

                    <ArrowRight
                      size={16}
                      className='transition-transform duration-300 group-hover/link:translate-x-1'
                    />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className='bg-[#f8faf8] py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='grid items-center gap-16 lg:grid-cols-2'>
            
            {/* LEFT */}
            <div>
              <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                Notre méthode
              </span>

              <h2 className='mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
                Une approche structurée et efficace
              </h2>

              <p className='mt-8 text-lg leading-8 text-gray-600'>
                Nous travaillons avec une méthodologie
                claire afin de garantir des résultats
                durables et mesurables.
              </p>

              {/* STEPS */}
              <div className='mt-12 space-y-5'>
                {process.map((item) => (
                  <div
                    key={item.id}
                    className='flex gap-5 rounded-3xl border border-green-100 bg-white p-6 shadow-sm'
                  >
                    <div className='grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-green-100 text-xl font-black text-[#0f7a3d]'>
                      {item.id}
                    </div>

                    <div>
                      <h3 className='text-xl font-bold text-gray-900'>
                        {item.title}
                      </h3>

                      <p className='mt-2 leading-7 text-gray-600'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative h-[700px] overflow-hidden rounded-[40px] shadow-2xl'>
              <Image
                src='/assets/services-process.png'
                alt='Process'
                fill
                className='object-cover'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
            </div>
          </div>
        </div>
      </section>

      {/* NORMES */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-8 py-20 text-white shadow-2xl'>
            
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_30%)]' />

            <div className='relative z-10'>
              
              <div className='mx-auto max-w-3xl text-center'>
                <span className='text-sm font-bold uppercase tracking-wider text-green-100'>
                  Certifications & conformité
                </span>

                <h2 className='mt-4 text-4xl font-black lg:text-5xl'>
                  Normes & réglementations
                </h2>

                <p className='mt-6 text-lg leading-8 text-green-50'>
                  Nous vous accompagnons dans la mise
                  en conformité avec les principales
                  normes du secteur alimentaire.
                </p>
              </div>

              {/* NORMES */}
              <div className='mt-14 grid gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-4'>
                {normes.map((item, index) => (
                  <div
                    key={index}
                    className='rounded-3xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl'
                  >
                    <CheckCircle2
                      size={28}
                      className='mx-auto text-green-300'
                    />

                    <h3 className='mt-4 text-xl font-bold'>
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='rounded-[40px] border border-green-100 bg-[#f8faf8] px-8 py-20 text-center'>
            
            <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
              Besoin d’accompagnement ?
            </span>

            <h2 className='mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
              Construisons vos solutions ensemble
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
              Contactez notre équipe pour bénéficier
              d’un accompagnement personnalisé et
              améliorer vos performances.
            </p>

            <button className='group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              Demander un audit

              <ArrowRight
                size={18}
                className='transition-transform duration-300 group-hover:translate-x-1'
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage