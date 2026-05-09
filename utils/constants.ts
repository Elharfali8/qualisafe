

type NavLinksProps = {
    id: number;
    name: string
    href: string
}

export const navLinks: NavLinksProps[] = [
  {
    id: 1,
    name: 'Accueil',
    href: '/',
  },
  {
    id: 2,
    name: 'À propos',
    href: '/about',
  },
  {
    id: 3,
    name: 'Nos services',
    href: '/services',
  },
  {
    id: 4,
    name: 'Domaines',
    href: '/domains',
  },
  {
    id: 5,
    name: 'Références',
    href: '/references',
  },
  {
    id: 6,
    name: 'Ressources',
    href: '/ressources',
  },
  {
    id: 7,
    name: 'Contact',
    href: '/contact',
  },
]