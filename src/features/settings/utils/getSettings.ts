import { db } from '@/lib/db'
import { GET_SETTINGS_QUERY } from '@/lib/db/queries'
import { type Settings, SettingsSchema } from '@/lib/db/schemas'
import { getErrorMessage } from '@/utils'

export async function getSettings(): Promise<Settings> {
  try {
    const settingsRaw = await db?.select(GET_SETTINGS_QUERY)
    console.log(settingsRaw)
    return SettingsSchema.parse(settingsRaw)
  } catch (error) {
    console.error(getErrorMessage(error))
    return SettingsSchema.parse([{}])
  }
}
