import { NavItem } from './NavItem'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Backlog', to: '/backlog' },
  { label: 'Settings', to: '/settings/general' },
]

export const Navbar = () => {
  return (
    <nav className='flex gap-4 text-xl'>
      {NAV_ITEMS.map(({ label, to }) => (
        <NavItem key={`navitem${label}`} to={to}>
          {label}
        </NavItem>
      ))}
    </nav>
  )
}
