import { Route, Routes } from 'react-router'
import { MainLayout, SettingsLayout } from './layouts'
import {
  BacklogPage,
  GeneralSection,
  HomePage,
  Metadata1Section,
  Metadata2Section,
  Metadata3Section,
  Metadata4Section,
  Metadata5Section,
} from './pages'

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='backlog' element={<BacklogPage />} />
        <Route path='settings' element={<SettingsLayout />}>
          <Route index path='general' element={<GeneralSection />} />
          <Route path='metadata1' element={<Metadata1Section />} />
          <Route path='metadata2' element={<Metadata2Section />} />
          <Route path='metadata 3' element={<Metadata3Section />} />
          <Route path='metadata 4' element={<Metadata4Section />} />
          <Route path='metadata 5' element={<Metadata5Section />} />
        </Route>
      </Route>
    </Routes>
  )
}
