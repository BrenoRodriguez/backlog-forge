import { Header, TitleBar } from '@/features/layout/components'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <>
      <TitleBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
