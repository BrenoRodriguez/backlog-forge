import { NavItem } from '@/components'
import {
  ArrowUp10,
  Flame,
  Gamepad,
  Gamepad2,
  ListOrdered,
  Settings,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'General', to: '/general', icon: <Settings /> },
  { label: 'Metadata 1', to: '/metadata1', icon: <Flame /> },
  { label: 'Metadata 2', to: '/metadata2', icon: <Gamepad /> },
  { label: 'Metadata 3', to: '/metadata3', icon: <ListOrdered /> },
  { label: 'Metadata 4', to: '/metadata4', icon: <Gamepad2 /> },
  { label: 'Metadata 5', to: '/metadata5', icon: <ArrowUp10 /> },
]

export const SettingsNavBar = () => {
  return (
    <aside className='relative mt-8 h-full border-stone-800 border-x border-t'>
      {NAV_ITEMS.map(({ to, label, icon }) => (
        <NavItem
          key={`SettingsNavItem${to}`}
          to={`/settings${to}`}
          appearance='settings'
        >
          {icon}
          {label}
        </NavItem>
      ))}
    </aside>
  )
}
