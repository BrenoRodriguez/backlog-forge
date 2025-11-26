import { documentDir } from '@tauri-apps/api/path'
import Database from '@tauri-apps/plugin-sql'

const documentPath = await documentDir()

export const db = await Database.load(`sqlite:${documentPath}/backy/games.db`)
