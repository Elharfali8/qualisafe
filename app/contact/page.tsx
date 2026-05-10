import Image from 'next/image'

import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react'

const contactInfos = [
    {
      id: 1,
      label: 'Téléphone',
      numberOne: '0641277920',
      numberTwo: '066565195',
      icon: Phone,
    },
    {
      id: 2,
      label: 'Email',
      value: 'qualitesecuritealimentaire@gmail.com',
      icon: Mail,
    },
    {
      id: 3,
      label: 'Adresse',
      value: "ZINAYA-BUREAU 11, MENARA TARGA ZDOUGHIA MARRAKECH",
      icon: MapPin,
    },
  ]

const ContactPage = () => {
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
                Contactez-nous
              </span>

              <h1 className='mt-6 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl'>
                Discutons de vos{' '}
                <span className='text-[#0f7a3d]'>
                  projets
                </span>
              </h1>

              <p className='mt-8 max-w-2xl text-lg leading-8 text-gray-600'>
                Notre équipe est à votre écoute pour
                vous accompagner dans vos démarches
                qualité, sécurité alimentaire et
                conformité réglementaire.
              </p>

              {/* FEATURES */}
              <div className='mt-10 grid gap-4 sm:grid-cols-2'>
                
                <div className='flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm'>
                  <CheckCircle2
                    size={22}
                    className='text-[#0f7a3d]'
                  />

                  <p className='font-medium text-gray-700'>
                    Réponse rapide
                  </p>
                </div>

                <div className='flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm'>
                  <MessageSquare
                    size={22}
                    className='text-[#0f7a3d]'
                  />

                  <p className='font-medium text-gray-700'>
                    Accompagnement personnalisé
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl'>
              <Image
                src='/assets/contact-hero.png'
                alt='Contact'
                fill
                className='object-cover'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

              {/* FLOATING CARD */}
              <div className='absolute bottom-8 left-8 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl'>
                <div className='flex items-start gap-4'>
                  
                  <div className='grid h-14 w-14 place-items-center rounded-2xl bg-green-100'>
                    <Phone
                      size={28}
                      className='text-[#0f7a3d]'
                    />
                  </div>

                  <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                      Besoin d’un audit ?
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-gray-600'>
                      Contactez-nous pour échanger avec nos experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='relative overflow-hidden rounded-[40px] border border-green-100 bg-[#f8faf8] p-6 shadow-xl shadow-green-100/20 lg:p-10'>
            
            {/* LEAVES */}
            <Image
              src='/assets/leaf-1.svg'
              alt=''
              width={140}
              height={140}
              className='pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 opacity-[0.05]'
            />

            <Image
              src='/assets/leaf-2.svg'
              alt=''
              width={260}
              height={260}
              className='pointer-events-none absolute bottom-0 right-0 z-0 opacity-[0.05]'
            />

            <div className='relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
              
              {/* LEFT */}
              <div>
                <span className='inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                  Informations
                </span>

                <h2 className='mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
                  Restons en contact
                </h2>

                <p className='mt-6 max-w-lg text-lg leading-8 text-gray-600'>
                  Notre équipe est disponible pour
                  répondre à vos questions et vous
                  accompagner dans vos projets.
                </p>

                {/* INFOS */}
                <ul className='mt-8 grid w-full gap-3 lg:mt-10 lg:gap-4'>
                {contactInfos.map((item) => {
                  const Icon = item.icon
                  return (
                    <li
                      key={item.id}
                      className='group flex w-full items-start gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-lg lg:p-5'
                    >
                      {/* ICON */}
                      <div className='grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-50 transition-all duration-300 group-hover:bg-[#0f7a3d] lg:h-14 lg:w-14 lg:rounded-2xl'>
                        <Icon
                          size={20}
                          className='text-[#0f7a3d] transition-colors duration-300 group-hover:text-white'
                        />
                      </div>

                      {/* TEXT — FIX: min-w-0 + break-all on email */}
                      <div className='min-w-0 flex-1'>
                        <p className='text-xs font-bold uppercase tracking-wide text-[#0f7a3d] lg:text-sm'>
                          {item.label}
                        </p>
                        <p className='mt-1 break-words text-xs lg:text-sm font-medium leading-6 text-gray-800 lg:text-base break-all'>
                          {item.value && item.value}
                          {item.numberOne && <span>{item.numberOne}</span>}
                          {item.numberTwo && (
                            <span className='mx-2 text-gray-400'>—</span>
                          )}
                          {item.numberTwo && <span>{item.numberTwo}</span>}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              </div>

              {/* FORM */}
              <div className='rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-xl lg:p-8'>
                
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    Envoyez-nous un message
                  </h3>

                  <p className='mt-2 text-gray-500'>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                <form className='grid gap-5'>
                  
                  {/* ROW */}
                  <div className='grid gap-5 lg:grid-cols-2'>
                    
                    <div>
                      <label className='mb-2 block text-sm font-semibold text-gray-700'>
                        Nom complet
                      </label>

                      <input
                        type='text'
                        placeholder='Votre nom'
                        className='h-14 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100'
                      />
                    </div>

                    <div>
                      <label className='mb-2 block text-sm font-semibold text-gray-700'>
                        Téléphone
                      </label>

                      <input
                        type='text'
                        placeholder='+225 XX XX XX XX'
                        className='h-14 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100'
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-gray-700'>
                      Adresse email
                    </label>

                    <input
                      type='email'
                      placeholder='exemple@email.com'
                      className='h-14 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100'
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-gray-700'>
                      Entreprise
                    </label>

                    <input
                      type='text'
                      placeholder='Nom de votre entreprise'
                      className='h-14 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100'
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-gray-700'>
                      Votre message
                    </label>

                    <textarea
                      rows={6}
                      placeholder='Décrivez votre besoin...'
                      className='w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100'
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type='submit'
                    className='group mt-2 flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-6 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                  >
                    Envoyer le message

                    <ArrowRight
                      size={18}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className='pb-24'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8'>
          
          <div className='overflow-hidden rounded-[40px] border border-green-100 shadow-xl'>
            <iframe
              src='https://www.google.com/maps?q=Cocody,Abidjan&output=embed'
              width='100%'
              height='500'
              loading='lazy'
              className='border-0 grayscale-[0.2]'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage