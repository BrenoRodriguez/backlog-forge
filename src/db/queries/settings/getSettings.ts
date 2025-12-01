export const GET_SETTINGS_QUERY = `
  SELECT
    displayed_metadata,
    metadata1_label,
    metadata1_presets,
    metadata2_status,
    metadata2_label,
    metadata2_presets,
    metadata3_status,
    metadata3_label,
    metadata3_presets,
    metadata4_status,
    metadata4_label,
    metadata4_presets,
    metadata5_status,
    metadata5_label,
    metadata5_presets
  FROM settings
  WHERE id = 1;
`
