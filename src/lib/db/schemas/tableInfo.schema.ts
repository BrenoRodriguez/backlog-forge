import z from 'zod'

export const TableInfoSchema = z.array(
  z.object({
    cid: z.number(),
    name: z.string(),
    type: z.string(),
    notnull: z.number(),
    dflt_value: z.string().nullable(),
    pk: z.number(),
  }),
)

export type TableInfoData = z.infer<typeof TableInfoSchema>
