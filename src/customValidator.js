
import yaml from 'js-yaml'
import Ajv from 'ajv'


export default function customValidator(schema, model) {
  // This isn't super performant, but it keeps our examples nice and clean
  const validate = new Ajv().compile(yaml.safeLoad(schema.trim()))

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
