

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
    name: 'Secteurs',
    href: '/sectors',
  },
  {
    id: 5,
    name: 'Contact',
    href: '/contact',
  },
]