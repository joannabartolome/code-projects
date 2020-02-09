

export default function customValidator(validate, model) {
  const result = validate(model)
  if (!result) {
    for (let err of validate.errors) {
      let msg = `VALIDATION ERROR: ${err.message}\n`
      msg += `    Schema Location: ${err.schemaPath}\n`
      msg += `    Data Location: ${err.dataPath}`
      console.error(msg)
    }
    return false
  }
  return true
}
