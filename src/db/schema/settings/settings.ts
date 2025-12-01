import { parseJsonArray } from '@/utils'
import z from 'zod'

export const RawSettingsSchema = z.array(
  z.object({
    display_metadata: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .catch(0),

    metadata1_label: z.string().catch('Expectation'),
    metadata1_presets: parseJsonArray(z.array(z.string()), [
      '1 - Must Play',
      '2 - Highly Interested',
      '3 - Moderate Interest',
      '4 - Interested',
      '5 - Worth a Shot',
      '6 - Series Pending',
    ]),

    metadata2_status: z.coerce.boolean().catch(true),
    metadata2_label: z.string().catch('Series'),
    metadata2_presets: parseJsonArray(z.array(z.string()), []),

    metadata3_status: z.coerce.boolean().catch(false),
    metadata3_label: z.string().catch(''),
    metadata3_presets: parseJsonArray(z.array(z.string()), []),

    metadata4_status: z.coerce.boolean().catch(false),
    metadata4_label: z.string().catch(''),
    metadata4_presets: parseJsonArray(z.array(z.string()), []),

    metadata5_status: z.coerce.boolean().catch(false),
    metadata5_label: z.string().catch(''),
    metadata5_presets: parseJsonArray(z.array(z.string()), []),
  }),
)

export const SettingsSchema = RawSettingsSchema.transform((raw) => ({
  displayMetadata: raw[0].display_metadata,

  metadata1: {
    label: raw[0].metadata1_label,
    presets: raw[0].metadata1_presets,
  },

  metadata2: {
    status: raw[0].metadata2_status,
    label: raw[0].metadata2_label,
    presets: raw[0].metadata2_presets,
  },

  metadata3: {
    status: raw[0].metadata3_status,
    label: raw[0].metadata3_label,
    presets: raw[0].metadata3_presets,
  },

  metadata4: {
    status: raw[0].metadata4_status,
    label: raw[0].metadata4_label,
    presets: raw[0].metadata4_presets,
  },

  metadata5: {
    status: raw[0].metadata5_status,
    label: raw[0].metadata5_label,
    presets: raw[0].metadata5_presets,
  },
}))

export type Settings = z.infer<typeof SettingsSchema>
