export const CREATE_SETTINGS_TABLE = `
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
`

export const SEED_SETTINGS_TABLE = `
  INSERT INTO settings
  SELECT NULL
  WHERE NOT EXISTS (SELECT 1 FROM settings);
`
