import { Outlet } from 'react-router'
import { TitleBar } from './components/TitleBar'

export const MainLayout = () => {
  return (
    <>
      <TitleBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
