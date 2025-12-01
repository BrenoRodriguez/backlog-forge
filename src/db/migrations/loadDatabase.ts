import { ensureExists, getPaths } from '@/utils'
import { create, mkdir } from '@tauri-apps/plugin-fs'
import Database from '@tauri-apps/plugin-sql'

export async function loadDatabase() {
  const { folderPath, dbPath } = await getPaths()

  await ensureExists(folderPath, mkdir)
  await ensureExists(dbPath, create)

  return Database.load(`sqlite:${dbPath}`)
}
