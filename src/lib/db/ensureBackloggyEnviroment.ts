import { ensureExists, getBackloggyPaths } from '@/utils/file-system'
import { create, mkdir } from '@tauri-apps/plugin-fs'

export async function ensureBackloggyEnviroment() {
  const { folderPath, dbPath } = await getBackloggyPaths()

  await ensureExists(folderPath, mkdir)
  await ensureExists(dbPath, create)
}
