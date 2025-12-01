import type Database from '@tauri-apps/plugin-sql'

export const seedDatabase = async (db: Database, seedSQL: string | null) => {
  if (seedSQL) {
    db.execute(seedSQL)
  }
}
