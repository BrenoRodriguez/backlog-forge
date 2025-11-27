import { documentDir } from '@tauri-apps/api/path'
import Database from '@tauri-apps/plugin-sql'
import { ensureBackloggyEnviroment } from './ensureBackloggyEnviroment'

const documentPath = await documentDir()

await ensureBackloggyEnviroment()

export const db = await Database.load(
  `sqlite:${documentPath}/backloggy/games.db`,
)
