export const CREATE_LIST_ENTRY_TABLE = `
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
`
