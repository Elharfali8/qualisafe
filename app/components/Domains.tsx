import { ArrowRight, Users, BarChart2, Coins, ShieldCheck, Store, Ruler } from 'lucide-react'

const domains = [
  {
    id: 1,
    title: 'Formation du personnel',
    desc: 'Renforcement des compétences et des bonnes pratiques au sein de vos équipes.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Ergonomie',
    desc: 'Amélioration des conditions de travail et de productivité dans vos espaces.',
    icon: BarChart2,
  },
  {
    id: 3,
    title: 'Gestion des coûts',
    desc: 'Optimisation des ressources et maîtrise des dépenses opérationnelles.',
    icon: Coins,
  },
  {
    id: 4,
    title: 'Gestion des innocuités',
    desc: 'Maîtrise des risques et sécurité des aliments selon les normes en vigueur.',
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: 'Création & accompagnement',
    desc: "Création et suivi des établissements de restauration et agroalimentaires.",
    icon: Store,
  },
  {
    id: 6,
    title: 'Architecture & conception',
    desc: 'Conception de salles et cuisines professionnelles pour les hôtels et restaurants.',
    icon: Ruler,
  },
]

const Domains = () => {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8'>

        {/* HEADER */}
        <div className='mb-14 text-center'>
          <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-[#3B6D11]'>
            Intervenants compétents
          </p>
          <h2 className='text-3xl font-black tracking-tight text-gray-900 lg:text-4xl'>
            Nos domaines d'intervention
          </h2>
          <div className='mx-auto mt-4 h-[3px] w-9 rounded-full bg-[#0f7a3d]' />
        </div>

        {/* GRID */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <div
                key={domain.id}
                className='group flex items-center gap-4 rounded-2xl  bg-white p-4 transition-all duration-150 ease-in-out hover:bg-gray-50 hover:shadow-lg border border-gray-200 shadow-md'
              >

                {/* ICON */}
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50'>
                  <Icon size={28} className='text-[#0f7a3d]' />
                </div>

                    <div>
                        {/* TITLE */}
                <h3 className='text-sm font-bold leading-snug text-gray-900'>
                  {domain.title}
                </h3>

                {/* DESC */}
                <p className='text-xs leading-relaxed text-gray-500'>
                  {domain.desc}
                </p>

                {/* LINK */}
                <div className='mt-auto'>
                  <button className='group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B6D11] transition-gap duration-200 cursor-pointer'>
                    En savoir plus
                    <ArrowRight
                      size={13}
                      className='transition-transform duration-200 group-hover/link:translate-x-0.5'
                    />
                  </button>
                </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Domains