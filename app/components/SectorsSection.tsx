import Image from 'next/image'
import {
  Wheat,
  Hotel,
  UtensilsCrossed,
  Factory,
  PackageCheck,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

const sectors = [
  {
    id: 1,
    title: 'Agroalimentaire',
    image: '/assets/field.jpg',
    icon: Wheat,
  },
  {
    id: 2,
    title: 'Hôtellerie',
    image: '/assets/hotel-room.jpg',
    icon: Hotel,
  },
  {
    id: 3,
    title: 'Restauration',
    image: '/assets/restaurant.jpg',
    icon: UtensilsCrossed,
  },
  {
    id: 4,
    title: 'Production',
    image: '/assets/food-factory.jpg',
    icon: Factory,
  },
  {
    id: 5,
    title: 'Distribution',
    image: '/assets/warehouse.jpg',
    icon: PackageCheck,
  },
]

const SectorsSection = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8'>
        
        {/* HEADER */}
        <SectionTitle badge='Nous intervenons dans' title='Des secteurs variés' />

        {/* CARDS */}
        <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5'>
          {sectors.map((sector) => {
            const Icon = sector.icon

            return (
              <div
                key={sector.id}
                className='group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
              >
                {/* IMAGE */}
                <div className='relative h-[260px] w-full overflow-hidden'>
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  {/* DARK OVERLAY */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

                  {/* GREEN OVERLAY */}
                  <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f7a3d]/95 to-transparent' />
                </div>

                {/* CONTENT */}
                <div className='absolute bottom-0 left-0 z-10 w-full p-5'>
                  <div className='flex items-center gap-3'>
                    
                    <div className='grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur-md'>
                      <Icon
                        size={20}
                        className='text-white'
                      />
                    </div>

                    <h3 className='text-lg font-bold text-white'>
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* HOVER BORDER */}
                <div className='absolute inset-0 rounded-3xl border border-white/10 transition-all duration-500 group-hover:border-green-300/40' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectorsSection