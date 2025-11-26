import type { ComponentProps, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleBarItemProps = PropsWithChildren &
  ComponentProps<'button'> & {
    className?: string
  }

export const TitleBarItem = ({
  children,
  className,
  ...props
}: TitleBarItemProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'flex h-8 w-12 cursor-pointer items-center justify-center bg-stone-900',
        'transition duration-300 ease-in hover:bg-stone-800',
        className,
      )}
    >
      {children}
    </button>
  )
}
