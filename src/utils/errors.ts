export function getErrorMessage(value: unknown): string {
  if (value instanceof Error) {
    return value.message
  }

  let stringified = '[Unable to stringify the thrown value]'

  try {
    stringified = JSON.stringify(value)
  } catch {}

  const error = new Error(
    `This value was throw as is, not through an Error: ${stringified}`,
  )

  return error.message
}
