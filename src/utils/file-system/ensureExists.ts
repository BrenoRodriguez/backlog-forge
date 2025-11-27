import { exists } from '@tauri-apps/plugin-fs'

export async function ensureExists<T>(
  path: string,
  creatorFunction: (path: string) => Promise<T>,
): Promise<void> {
  if (await exists(path)) return

  await creatorFunction(path)
}
