import { db } from '@/db'
import { GET_SETTINGS_QUERY } from '@/db/queries'
import { type Settings, SettingsSchema } from '@/db/schema'
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
