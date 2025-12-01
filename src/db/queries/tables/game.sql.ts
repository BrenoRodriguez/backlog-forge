export const CREATE_GAME_TABLE = `
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
`
