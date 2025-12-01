import type { GamePlatforms, GameStatus } from './game'

export type GameQueryOptions = {
  search?: string
  filters?: GameFilterOptions
  sort?: GameSortSettings
}

export type GameFilterOptions = {
  status?: GameStatus
  genre?: string
  platform: GamePlatforms
  length?: NumericRange
  metadata1?: string
  metadata2?: string
  metadata3?: string
  metadata4?: string
  metadata5?: string
  reviewScore?: NumericRange
}

export type NumericRange = {
  min?: number | null
  max?: number | null
}

export type GameSortSettings = {
  order: GameSortOrder
  option: GameSortOption
}

type GameSortOrder = 'asc' | 'desc'

type GameSortOption =
  | 'default'
  | 'alphabetical'
  | 'status'
  | 'length'
  | 'review'
