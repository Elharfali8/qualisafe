import React from 'react'

const SectionTitle = ({badge, title, subTitle}:{badge?:string,title:string, subTitle?:string}) => {
  return (
    <div className='mx-auto max-w-3xl text-center'>
          <span className='inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-[#0f7a3d]'>
            {badge}
          </span>

          <h2 className='mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl'>
            {title}
          </h2>

          <div className={`mx-auto mt-5 h-1 w-20 rounded-full bg-[#0f7a3d]`} />

          {subTitle && (
              <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
            {subTitle}
          </p>
          )}
        </div>
  )
}

export default SectionTitle