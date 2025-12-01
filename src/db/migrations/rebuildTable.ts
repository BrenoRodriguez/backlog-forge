import type { DatabaseTable } from '@/types'
import type Database from '@tauri-apps/plugin-sql'
import { backupBrokenTable } from './backupBrokenTable'

export const rebuildTable = async (
  db: Database,
  tableName: DatabaseTable,
  createSQL: string,
) => {
  await backupBrokenTable(db, tableName)
  await db.execute(createSQL)
}
