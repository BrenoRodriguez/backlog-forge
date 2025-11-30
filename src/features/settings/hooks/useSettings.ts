import { SettingsSchema } from '@/lib/db/schemas'
import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../utils/getSettings'

export function useSettings() {
  const { data } = useQuery({ queryKey: ['settings'], queryFn: getSettings })

  return !data ? SettingsSchema.parse([{}]) : data
}
