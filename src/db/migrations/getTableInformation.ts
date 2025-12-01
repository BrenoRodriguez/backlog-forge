import type { DatabaseTable } from '@/types'
import type Database from '@tauri-apps/plugin-sql'
import { TableInformationSchema } from '../schema'

export const getTableInformation = async (
  db: Database,
  table: DatabaseTable,
) => {
  const rawTableInfo = await db.select(`PRAGMA table_info(${table})`)

  return TableInformationSchema.parse(rawTableInfo)
}
