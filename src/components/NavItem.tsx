import { cva, type VariantProps } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'
import { NavLink, type NavLinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

const navItemVariants = cva('', {
  variants: {
    appearance: {
      navbar:
        'cursor-pointer select-none tracking-wide transition-colors' +
        'duration-200 ease-in hover:text-accent-light',
      settings:
        'flex items-start gap-6 border-b border-stone-800 px-12 py-4 text-lg',
    },
    active: {
      false: '',
      true: 'border-accent-light bg-stone-900/40 font-medium text-accent-light',
    },
  },
  compoundVariants: [
    {
      appearance: 'navbar',
      active: true,
      class: 'text-accent-light',
    },
    {
      appearance: 'settings',
      active: true,
      class: '',
    },
  ],
  defaultVariants: {
    appearance: 'navbar',
    active: false,
  },
})

type NavItemProps = PropsWithChildren &
  NavLinkProps &
  VariantProps<typeof navItemVariants>

export const NavItem = ({ children, appearance, ...props }: NavItemProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        twMerge(navItemVariants({ appearance, active: isActive }))
      }
    >
      {children}
    </NavLink>
  )
}
