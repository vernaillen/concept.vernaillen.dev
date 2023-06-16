import type { NavItem } from '~~/types'

export function useNavItems (): NavItem[] {
  return [
    { path: '/', title: 'Home' },
    { path: '/contact', title: 'Contact' }
  ]
}
