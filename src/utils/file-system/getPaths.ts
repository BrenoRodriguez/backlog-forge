import { documentDir, join } from '@tauri-apps/api/path'

export type Paths = {
  documentsPath: string
  folderPath: string
  dbPath: string
}

export async function getPaths(): Promise<Paths> {
  const documentsPath = await documentDir()
  const folderPath = await join(documentsPath, 'backloggy')
  const dbPath = await join(folderPath, 'games.db')

  return { documentsPath, folderPath, dbPath }
}
