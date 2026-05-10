import Image from 'next/image'

import {
  Wheat,
  Hotel,
  UtensilsCrossed,
  Factory,
  PackageCheck,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const sectors = [
  {
    id: 1,
    title: 'Agroalimentaire',
    image: '/assets/field.jpg',
    icon: Wheat,
    desc: 'Accompagnement des entreprises agroalimentaires dans la gestion qualité, la sécurité sanitaire et la conformité réglementaire.',
    points: [
      'Hygiène & sécurité alimentaire',
      'Traçabilité & conformité',
      'Audits internes HACCP',
      'Optimisation des processus',
    ],
  },
  {
    id: 2,
    title: 'Hôtellerie',
    image: '/assets/hotel-room.jpg',
    icon: Hotel,
    desc: 'Mise en place de standards qualité et accompagnement des établissements hôteliers.',
    points: [
      'Formation du personnel',
      'Normes d’hygiène',
      'Organisation opérationnelle',
      'Gestion qualité',
    ],
  },
  {
    id: 3,
    title: 'Restauration',
    image: '/assets/restaurant.jpg',
    icon: UtensilsCrossed,
    desc: 'Solutions adaptées aux restaurants pour garantir sécurité alimentaire et excellence opérationnelle.',
    points: [
      'Application HACCP',
      'Contrôle sanitaire',
      'Prévention des risques',
      'Formation cuisine',
    ],
  },
  {
    id: 4,
    title: 'Production',
    image: '/assets/food-factory.jpg',
    icon: Factory,
    desc: 'Optimisation des unités de production et amélioration continue des performances.',
    points: [
      'Process industriels',
      'Contrôle qualité',
      'Sécurité production',
      'Audits techniques',
    ],
  },
  {
    id: 5,
    title: 'Distribution',
    image: '/assets/warehouse.jpg',
    icon: PackageCheck,
    desc: 'Accompagnement des structures de distribution pour garantir qualité et conformité.',
    points: [
      'Stockage & logistique',
      'Contrôle traçabilité',
      'Normes de distribution',
      'Gestion des risques',
    ],
  },
]

const SectorsPage = () => {
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
                Secteurs d’activité
              </span>

              <h1 className='mt-6 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl'>
                Une expertise adaptée à chaque{' '}
                <span className='text-[#0f7a3d]'>
                  secteur professionnel
                </span>
              </h1>

              <p className='mt-8 max-w-2xl text-lg leading-8 text-gray-600'>
                Nous accompagnons différents secteurs
                d’activité avec des solutions adaptées
                aux exigences de qualité, sécurité
                alimentaire et conformité réglementaire.
              </p>

              {/* FEATURES */}
              <div className='mt-10 grid gap-4 sm:grid-cols-2'>
                
                <div className='flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm'>
                  <BadgeCheck
                    size={22}
                    className='text-[#0f7a3d]'
                  />

                  <p className='font-medium text-gray-700'>
                    Expertise multisectorielle
                  </p>
                </div>

                <div className='flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm'>
                  <ShieldCheck
                    size={22}
                    className='text-[#0f7a3d]'
                  />

                  <p className='font-medium text-gray-700'>
                    Conformité réglementaire
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl'>
              <Image
                src='/assets/services-hero.png'
                alt='Secteurs'
                fill
                className='object-cover'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          {/* HEADER */}
          <div className='mx-auto max-w-3xl text-center'>
            <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
              Nos domaines
            </span>

            <h2 className='mt-4 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl'>
              Les secteurs que nous accompagnons
            </h2>

            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Une expertise spécifique adaptée aux
              besoins et contraintes de chaque secteur.
            </p>
          </div>

          {/* CARDS */}
          <div className='mt-20 space-y-10'>
            {sectors.map((sector, index) => {
              const Icon = sector.icon

              return (
                <div
                  key={sector.id}
                  className='grid items-center gap-10 rounded-[40px] border border-green-100 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10'
                >
                  
                  {/* IMAGE */}
                  <div
                    className={`relative h-[420px] overflow-hidden rounded-[32px] ${
                      index % 2 !== 0 ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className='object-cover transition-transform duration-700 hover:scale-105'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

                    {/* BADGE */}
                    <div className='absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl'>
                      
                      <div className='grid h-12 w-12 place-items-center rounded-2xl bg-white/10'>
                        <Icon
                          size={24}
                          className='text-white'
                        />
                      </div>

                      <h3 className='text-2xl font-bold text-white'>
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                      Secteur spécialisé
                    </span>

                    <h2 className='mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900'>
                      {sector.title}
                    </h2>

                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                      {sector.desc}
                    </p>

                    {/* POINTS */}
                    <div className='mt-10 grid gap-4'>
                      {sector.points.map((point, idx) => (
                        <div
                          key={idx}
                          className='flex items-start gap-4 rounded-2xl border border-green-100 bg-[#f8faf8] p-5'
                        >
                          <CheckCircle2
                            size={22}
                            className='mt-1 text-[#0f7a3d]'
                          />

                          <p className='font-medium leading-7 text-gray-700'>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <button className='group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
                      En savoir plus

                      <ArrowRight
                        size={18}
                        className='transition-transform duration-300 group-hover:translate-x-1'
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-8 py-20 text-center text-white shadow-2xl'>
            
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_30%)]' />

            <div className='relative z-10'>
              
              <span className='text-sm font-bold uppercase tracking-wider text-green-100'>
                Besoin d’accompagnement ?
              </span>

              <h2 className='mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight lg:text-5xl'>
                Construisons vos solutions ensemble
              </h2>

              <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50'>
                Contactez notre équipe pour bénéficier
                d’un accompagnement personnalisé adapté
                à votre secteur d’activité.
              </p>

              <button className='group mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-[#0f7a3d] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
                Demander un audit

                <ArrowRight
                  size={18}
                  className='transition-transform duration-300 group-hover:translate-x-1'
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SectorsPage