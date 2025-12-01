import { DATABASE_TABLES } from '@/data'
import { getErrorMessage } from '@/utils'
import type Database from '@tauri-apps/plugin-sql'
import { ensureTableSchema } from './ensureTableSchema'

export const migrateDatabase = async (db: Database) => {
  try {
    for (const table of Object.values(DATABASE_TABLES)) {
      await ensureTableSchema(db, table)
    }
  } catch (error) {
    console.error(`Error migrating database: ${getErrorMessage(error)}`)
  }
}
