import type { DatabaseTable } from '@/types'

export const CREATE_TABLES_QUERIES: Record<DatabaseTable, string> = {
  game: `DROP TABLE IF EXISTS game;
    CREATE TABLE game (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      cover TEXT NOT NULL,
      genres TEXT NOT NULL,
      status TEXT NOT NULL,
      length INTEGER,
      platform TEXT NOT NULL,
      review_score REAL,
      metadata1 TEXT,
      metadata2 TEXT,
      metadata3 TEXT,
      metadata4 TEXT,
      metadata5 TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `,
  list: `DROP TABLE IF EXISTS list;
    CREATE TABLE list (
      id INTEGER PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      isMain INTEGER DEFAULT 0
    );
  `,
  list_entry: `DROP TABLE IF EXISTS list_entry;
    CREATE TABLE list_entry (
      id INTEGER PRIMARY KEY,
      game_id INTEGER NOT NULL,
      list_id INTEGER NOT NULL,
      notes TEXT,
      position INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (game_id) REFERENCES game(id) ON DELETE CASCADE,
      FOREIGN KEY (list_id) REFERENCES list(id) ON DELETE CASCADE,
      UNIQUE (game_id, list_id)
    );
  `,
  settings: `DROP TABLE IF EXISTS settings;
    CREATE TABLE settings (
      id INTEGER PRIMARY KEY,
      displayed_metadata INTEGER DEFAULT 0,
      metadata1_label TEXT DEFAULT 'Expectation',
      metadata1_presets TEXT DEFAULT '["1 - Must Play", "2 - Highly Interested", "3 - Moderate Interest", "4 - Interested", "5 - Worth a Shot", "6 - Series Pending"]',
      metadata2_status INTEGER DEFAULT 1,
      metadata2_label TEXT DEFAULT 'Series',
      metadata2_presets TEXT,
      metadata3_status INTEGER DEFAULT 0,
      metadata3_label TEXT,
      metadata3_presets TEXT,
      metadata4_status INTEGER DEFAULT 0,
      metadata4_label TEXT,
      metadata4_presets TEXT,
      metadata5_status INTEGER DEFAULT 0,
      metadata5_label TEXT,
      metadata5_presets TEXT
    );
  `,
}
