import { ensureDatabaseSchema } from './ensureDatabaseSchema'

export const db = await ensureDatabaseSchema()
