import type { DatabaseTable } from '@/types'
import { DATABASE_COLUMNS_BY_TABLE } from '@/utils/constants/database-info'
import type Database from '@tauri-apps/plugin-sql'
import { CREATE_TABLES_QUERIES } from './queries/createTables'
import { TableInfoSchema } from './schemas'

export async function ensureTableSchema(db: Database, table: DatabaseTable) {
  const currentColumnsRaw = await db.select(`PRAGMA table_info(${table})`)
  const currentColumns = TableInfoSchema.parse(currentColumnsRaw)

  const expectedColumns = DATABASE_COLUMNS_BY_TABLE[table]

  const schemaIsEqual =
    JSON.stringify(currentColumns) === JSON.stringify(expectedColumns)

  if (!schemaIsEqual) {
    await db.execute(CREATE_TABLES_QUERIES[table])
  }
}
