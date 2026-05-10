import Image from 'next/image'
import {
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  BriefcaseBusiness,
} from 'lucide-react'

const values = [
  {
    id: 1,
    title: 'Expertise',
    desc: 'Des années d’expérience dans la sécurité alimentaire et les systèmes qualité.',
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: 'Conformité',
    desc: 'Des solutions alignées aux normes et réglementations internationales.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Formation',
    desc: 'Transmission des bonnes pratiques aux équipes et responsables.',
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'Accompagnement',
    desc: 'Un suivi personnalisé pour garantir des résultats durables.',
    icon: Users,
  },
]

const stats = [
  {
    id: 1,
    number: '25+',
    label: 'Années d’expérience',
  },
  {
    id: 2,
    number: '150+',
    label: 'Entreprises accompagnées',
  },
  {
    id: 3,
    number: '98%',
    label: 'Satisfaction clients',
  },
]

const commitments = [
  'Garantir la sécurité et l’innocuité alimentaire',
  'Optimiser les performances opérationnelles',
  'Accompagner les entreprises vers la conformité',
  'Former les équipes aux meilleures pratiques',
  'Développer une amélioration continue durable',
]

const AboutPage = () => {
  return (
    <main className='bg-white'>
      
      {/* HERO */}
      <section className='relative overflow-hidden bg-[#f8faf8] py-28'>
        
        {/* BACKGROUND */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%)]' />

        <Image
          src='/assets/leaf-1.svg'
          alt=''
          width={240}
          height={240}
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
                À propos de nous
              </span>

              <h1 className='mt-6 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl'>
                Votre partenaire en{' '}
                <span className='text-[#0f7a3d]'>
                  qualité & sécurité alimentaire
                </span>
              </h1>

              <p className='mt-8 max-w-2xl text-lg leading-8 text-gray-600'>
                Q.S.A accompagne les professionnels de
                l’agroalimentaire, de la restauration
                et de l’hôtellerie dans leurs démarches
                de conformité, d’amélioration continue
                et d’excellence opérationnelle.
              </p>

              {/* STATS */}
              <div className='mt-12 grid grid-cols-3 gap-4'>
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className='rounded-3xl border border-green-100 bg-white p-5 shadow-sm'
                  >
                    <h3 className='text-3xl font-black text-[#0f7a3d]'>
                      {stat.number}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-gray-600'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative'>
              
              <div className='relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl'>
                <Image
                  src='/assets/about-main.png'
                  alt='QSA Team'
                  fill
                  className='object-cover'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
              </div>

              {/* FLOATING CARD */}
              <div className='absolute -bottom-8 left-8 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl'>
                <div className='flex items-start gap-4'>
                  
                  <div className='grid h-14 w-14 place-items-center rounded-2xl bg-green-100'>
                    <BriefcaseBusiness
                      size={28}
                      className='text-[#0f7a3d]'
                    />
                  </div>

                  <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                      Excellence & conformité
                    </h3>

                    <p className='mt-2 max-w-xs text-sm leading-6 text-gray-600'>
                      Une expertise dédiée à la sécurité alimentaire et à la performance durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='grid items-center gap-16 lg:grid-cols-2'>
            
            {/* IMAGE */}
            <div className='relative h-[550px] overflow-hidden rounded-[40px]'>
              <Image
                src='/assets/about-story.png'
                alt='Food safety'
                fill
                className='object-cover'
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                Notre histoire
              </span>

              <h2 className='mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
                Une vision centrée sur la qualité
              </h2>

              <p className='mt-8 text-lg leading-8 text-gray-600'>
                Depuis plusieurs années, nous accompagnons
                les entreprises dans l’amélioration de leurs
                systèmes qualité et la mise en conformité
                avec les exigences réglementaires et
                opérationnelles du secteur alimentaire.
              </p>

              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Notre approche repose sur l’écoute,
                l’expertise terrain et des solutions
                adaptées à chaque structure afin de
                garantir des résultats durables et
                mesurables.
              </p>

              {/* COMMITMENTS */}
              <div className='mt-10 grid gap-4'>
                {commitments.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-4 rounded-2xl border border-green-100 bg-[#f8faf8] p-5'
                  >
                    <CheckCircle2
                      size={22}
                      className='mt-1 text-[#0f7a3d]'
                    />

                    <p className='text-base leading-7 text-gray-700'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className='bg-[#f8faf8] py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          {/* HEADER */}
          <div className='mx-auto max-w-3xl text-center'>
            <span className='text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
              Nos valeurs
            </span>

            <h2 className='mt-4 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl'>
              Les principes qui nous guident
            </h2>

            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Une approche fondée sur l’expertise,
              la proximité et l’amélioration continue.
            </p>
          </div>

          {/* CARDS */}
          <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.id}
                  className='group rounded-[32px] border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <div className='grid h-16 w-16 place-items-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-[#0f7a3d]'>
                    <Icon
                      size={30}
                      className='text-[#0f7a3d] transition-colors duration-300 group-hover:text-white'
                    />
                  </div>

                  <h3 className='mt-8 text-2xl font-bold text-gray-900'>
                    {value.title}
                  </h3>

                  <p className='mt-4 leading-7 text-gray-600'>
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='grid gap-8 lg:grid-cols-2'>
            
            {/* MISSION */}
            <div className='rounded-[40px] bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] p-10 text-white shadow-2xl'>
              <div className='grid h-16 w-16 place-items-center rounded-2xl bg-white/10'>
                <Target size={32} />
              </div>

              <h2 className='mt-8 text-4xl font-black'>
                Notre mission
              </h2>

              <p className='mt-6 text-lg leading-8 text-green-50'>
                Accompagner les professionnels vers
                des pratiques plus sûres, conformes
                et performantes grâce à une expertise
                opérationnelle et des solutions adaptées.
              </p>
            </div>

            {/* VISION */}
            <div className='rounded-[40px] border border-green-100 bg-[#f8faf8] p-10'>
              <div className='grid h-16 w-16 place-items-center rounded-2xl bg-green-100'>
                <Eye
                  size={32}
                  className='text-[#0f7a3d]'
                />
              </div>

              <h2 className='mt-8 text-4xl font-black text-gray-900'>
                Notre vision
              </h2>

              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Devenir une référence dans
                l’accompagnement qualité et sécurité
                alimentaire en apportant des solutions
                modernes, durables et orientées résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-8 py-20 text-center text-white shadow-2xl'>
            
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_30%)]' />

            <div className='relative z-10'>
              <h2 className='text-4xl font-black leading-tight lg:text-5xl'>
                Construisons vos solutions ensemble
              </h2>

              <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50'>
                Contactez notre équipe pour discuter
                de vos besoins et bénéficier d’un
                accompagnement personnalisé.
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

export default AboutPage