import type { DATABASE_TABLES } from '@/utils/constants/database-info'

export type DatabaseTable = (typeof DATABASE_TABLES)[number]
