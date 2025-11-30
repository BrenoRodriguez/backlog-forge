import { useSettings } from '@/features/settings/hooks'

export const HomePage = () => {
  const settings = useSettings()

  console.log(settings)
  return <></>
}
