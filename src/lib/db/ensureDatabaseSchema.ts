import { getErrorMessage } from '@/utils'
import { DATABASE_TABLES } from '@/utils/constants/database-info'
import { ensureTableSchema } from './ensureTableSchema'
import { loadDatabase } from './loadDatabase'

export async function ensureDatabaseSchema() {
  try {
    const db = await loadDatabase()

    for (const table of DATABASE_TABLES) {
      await ensureTableSchema(db, table)
    }

    return db
  } catch (error) {
    console.error(getErrorMessage(error))
  }
}
