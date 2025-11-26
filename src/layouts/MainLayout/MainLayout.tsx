import { Outlet } from 'react-router'
import { Header } from './components/Header'
import { TitleBar } from './components/TitleBar'

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
