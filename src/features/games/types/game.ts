import type { GAME_PLATFORMS, GAME_STATUS } from '../constants'

export type GameStatus = (typeof GAME_STATUS)[number]

export type GamePlatforms = (typeof GAME_PLATFORMS)[number]

export type Game = {
  id: number
  name: string
  coverArt: string
  genres: string[]
  platform: GamePlatforms
  status: GameStatus
  length?: number
}

export type GameBacklogCard = Game & {
  position: number
  reviewScore?: number
  metadata?: string
}

export type GameBacklogEdit = Game & {
  position: number
  reviewScore?: number
  metadata1?: string
  metadata2?: string
  metadata3?: string
  metadata4?: string
  metadata5?: string
}
