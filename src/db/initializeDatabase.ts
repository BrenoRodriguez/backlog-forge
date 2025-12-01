import { loadDatabase } from './migrations'
import { migrateDatabase } from './migrations/migrateDatabase'

export const initializeDatabase = async () => {
  const db = await loadDatabase()
  await migrateDatabase(db)

  return db
}
