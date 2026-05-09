import {
  BadgeCheck,
  ShieldCheck,
  ClipboardCheck,
  SearchCheck,
  Factory,
  CheckCircle2,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

const servicesLeft = [
  {
    id: 1,
    title:
      "Former le personnel aux bonnes pratiques d’hygiène et de sécurité alimentaire.",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title:
      "Assurer un suivi régulier afin de garantir l’amélioration continue.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title:
      "Identifier les risques liés à l’hygiène, la traçabilité, la qualité et l’innocuité des aliments.",
    icon: SearchCheck,
  },
  {
    id: 4,
    title:
      "Solutions sur mesure adaptées à votre activité.",
    icon: Factory,
  },
]

const servicesRight = [
  'Audit interne et analyses amont/aval',
  'Gestion des anomalies et non-conformités',
  'Suivi et accompagnement personnalisé',
  'Évaluation des pratiques et procédés',
  'Préparation aux audits de certification',
]

const ServicesSection = () => {
  return (
    <section className='relative overflow-hidden py-24'>
      
      {/* BACKGROUND */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f8faf8] to-white' />

      {/* BLUR */}
      <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-50 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-4 lg:px-8'>
        
        {/* HEADER */}
              <SectionTitle
                  badge='Nos prestations'
                  title='Des solutions complètes pour vos besoins' subTitle='Nous accompagnons les professionnels de
                            l’agroalimentaire et de la restauration
                            avec des solutions concrètes, adaptées
                            aux exigences réglementaires et
                            opérationnelles.'
              />

        {/* CONTENT */}
        <div className='mt-20 grid gap-8 lg:grid-cols-2'>
          
          {/* LEFT SIDE */}
          <div className='rounded-[32px] border border-green-100 bg-white/80 p-8 shadow-xl shadow-green-100/20 backdrop-blur-xl'>
            
            <div className='mb-8 flex items-center gap-4'>
              <div className='grid h-14 w-14 place-items-center rounded-2xl bg-green-100'>
                <ClipboardCheck
                  size={28}
                  className='text-[#0f7a3d]'
                />
              </div>

              <div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Accompagnement & prévention
                </h3>

                <p className='mt-1 text-sm text-gray-500'>
                  Formation, suivi et amélioration continue
                </p>
              </div>
            </div>

            <div className='space-y-5'>
              {servicesLeft.map((service) => {
                const Icon = service.icon

                return (
                  <div
                    key={service.id}
                    className='group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#f8faf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-lg'
                  >
                    <div className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-100 transition-all duration-300 group-hover:bg-[#0f7a3d]'>
                      <Icon
                        size={22}
                        className='text-[#0f7a3d] transition-colors duration-300 group-hover:text-white'
                      />
                    </div>

                    <p className='text-sm font-medium leading-7 text-gray-700'>
                      {service.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] p-8 text-white shadow-2xl'>
            
            {/* DECORATION */}
            <div className='absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl' />

            <div className='relative'>
              
              <div className='mb-8 flex items-center gap-4'>
                <div className='grid h-14 w-14 place-items-center rounded-2xl bg-white/10 backdrop-blur-xl'>
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className='text-2xl font-bold'>
                    Audit & conformité
                  </h3>

                  <p className='mt-1 text-sm text-green-100'>
                    Sécurité alimentaire & réglementation
                  </p>
                </div>
              </div>

              <div className='space-y-5'>
                {servicesRight.map((service, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl'
                  >
                    <div className='mt-1'>
                      <CheckCircle2
                        size={20}
                        className='text-green-300'
                      />
                    </div>

                    <p className='text-sm leading-7 text-green-50'>
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection