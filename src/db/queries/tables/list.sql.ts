export const CREATE_LIST_TABLE = `
  CREATE TABLE list (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isMain INTEGER DEFAULT 0
  ); 
`

export const SEED_LIST_TABLE = `
  INSERT INTO list (name, isMain)
  SELECT 'Backlog', 1
  WHERE NOT EXISTS (
    SELECT 1 FROM list WHERE isMain = 1
  );
`
