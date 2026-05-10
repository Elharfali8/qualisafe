import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ContactSection = () => {

  const infos = [
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
      value: "Cocody, Abidjan - Côte d'Ivoire",
      icon: MapPin,
    },
  ]

  return (
    <section className='bg-white py-24'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8'>

        <div className='relative overflow-hidden rounded-3xl border border-green-100 bg-[#f8faf8] p-5 shadow-xl shadow-green-100/20 lg:rounded-[40px] lg:p-10'>

          {/* BACKGROUND LEAVES */}
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

          {/* CONTENT — FIX: grid-cols-1 default, lg override */}
          <div className='relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10'>

            {/* LEFT SIDE */}
            <div className='min-w-0'>

              {/* BADGE */}
              <span className='inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
                Contactez-nous
              </span>

              {/* TITLE */}
              <h2 className='mt-6 text-3xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
                Discutons de vos projets
              </h2>

              {/* DESC */}
              <p className='mt-4 text-base leading-7 text-gray-600 lg:mt-6 lg:text-lg'>
                Notre équipe d'experts est à votre écoute pour vous accompagner
                vers l'excellence opérationnelle, la conformité réglementaire
                et l'amélioration continue de vos performances.
              </p>

              {/* INFOS */}
              <ul className='mt-8 grid gap-3 lg:mt-10 lg:gap-4'>
                {infos.map((item) => {
                  const Icon = item.icon
                  return (
                    <li
                      key={item.id}
                      className='group flex items-start gap-4 rounded-2xl border border-green-100 bg-white/70 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-green-200 hover:bg-white hover:shadow-lg lg:p-5'
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
                        <p className='mt-1 break-words text-sm font-medium leading-6 text-gray-800 lg:text-base'>
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

            {/* RIGHT SIDE / FORM — FIX: min-w-0 prevents blowout */}
            <div className='min-w-0 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:rounded-[32px] lg:p-8'>

              <div className='mb-6 lg:mb-8'>
                <h3 className='text-xl font-bold text-gray-900 lg:text-2xl'>
                  Envoyez-nous un message
                </h3>
                <p className='mt-2 text-sm text-gray-500 lg:text-base'>
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form className='grid gap-4 lg:gap-5'>

                {/* ROW */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5'>
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-gray-700'>
                      Nom complet
                    </label>
                    <input
                      type='text'
                      placeholder='Votre nom'
                      className='h-12 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100 lg:h-14 lg:px-5'
                    />
                  </div>
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-gray-700'>
                      Téléphone
                    </label>
                    <input
                      type='text'
                      placeholder='+225 XX XX XX XX'
                      className='h-12 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100 lg:h-14 lg:px-5'
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
                    className='h-12 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100 lg:h-14 lg:px-5'
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
                    className='h-12 w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100 lg:h-14 lg:px-5'
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className='mb-2 block text-sm font-semibold text-gray-700'>
                    Votre message
                  </label>
                  <textarea
                    rows={5}
                    placeholder='Décrivez votre besoin...'
                    className='w-full rounded-2xl border border-gray-200 bg-[#f8faf8] px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0f7a3d] focus:bg-white focus:ring-4 focus:ring-green-100 lg:px-5 lg:py-4'
                  />
                </div>

                {/* BUTTON */}
                <button
                  type='submit'
                  className='group mt-1 flex h-12 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-6 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:h-14'
                >
                  Envoyer le message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection