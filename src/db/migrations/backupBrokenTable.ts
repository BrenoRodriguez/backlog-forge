import type { DatabaseTable } from '@/types'
import type Database from '@tauri-apps/plugin-sql'

export const backupBrokenTable = async (
  db: Database,
  tableName: DatabaseTable,
) => {
  const backupName = `${tableName}_backup`

  await db.execute(`DROP TABLE IF EXISTS ${backupName};`)
  await db.execute(`ALTER TABLE ${tableName} RENAME TO ${backupName};`)
}
