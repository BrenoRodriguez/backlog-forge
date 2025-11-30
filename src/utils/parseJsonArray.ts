import z from 'zod'

export function parseJsonArray<T extends z.ZodTypeAny>(
  schema: T,
  fallback: z.infer<T>,
) {
  return z.preprocess((value) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value)
      } catch {
        return undefined
      }
    }
    return value
  }, schema.catch(fallback))
}
