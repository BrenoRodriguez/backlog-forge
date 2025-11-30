import {
  BacklogPage,
  GeneralSection,
  HomePage,
  Metadata1Section,
  Metadata2Section,
  Metadata3Section,
  Metadata4Section,
  Metadata5Section,
} from '@/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router'
import { MainLayout, SettingsLayout } from './layouts'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='backlog' element={<BacklogPage />} />
          <Route path='settings' element={<SettingsLayout />}>
            <Route index path='general' element={<GeneralSection />} />
            <Route path='metadata1' element={<Metadata1Section />} />
            <Route path='metadata2' element={<Metadata2Section />} />
            <Route path='metadata3' element={<Metadata3Section />} />
            <Route path='metadata4' element={<Metadata4Section />} />
            <Route path='metadata5' element={<Metadata5Section />} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}
