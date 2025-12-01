export type DatabaseTable = 'game' | 'list' | 'list_entry' | 'settings'

export type Table = {
  name: DatabaseTable
  createSQL: string
  seedSQL: string | null
}
