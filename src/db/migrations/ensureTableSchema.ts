import { DATABASE_SCHEMA } from '@/data'
import type { DatabaseTable } from '@/types'
import type Database from '@tauri-apps/plugin-sql'
import { getTableInformation } from './getTableInformation'
import { rebuildTable } from './rebuildTable'
import { seedDatabase } from './seedDatabase'

type Table = {
  name: DatabaseTable
  createSQL: string
  seedSQL: string | null
}

export const ensureTableSchema = async (
  db: Database,
  { name, seedSQL, createSQL }: Table,
) => {
  const currentColumns = await getTableInformation(db, name)
  const expectedColumns = DATABASE_SCHEMA[name]

  const isSchemaEqual =
    JSON.stringify(currentColumns) === JSON.stringify(expectedColumns)

  if (!isSchemaEqual) {
    await rebuildTable(db, name, createSQL)
  }

  await seedDatabase(db, seedSQL)
}
