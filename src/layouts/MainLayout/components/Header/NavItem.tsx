import type { PropsWithChildren } from 'react'
import { NavLink, type NavLinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

type NavItemProps = PropsWithChildren & NavLinkProps

export const NavItem = ({ children, ...props }: NavItemProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        twMerge(
          'cursor-pointer select-none tracking-wide transition-colors',
          'duration-200 ease-in hover:text-accent-light',
          isActive && 'text-accent-light',
        )
      }
    >
      {children}
    </NavLink>
  )
}
