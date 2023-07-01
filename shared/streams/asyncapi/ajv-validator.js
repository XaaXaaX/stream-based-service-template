const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajvOptions = {
  allErrors: true,
};

// as this is not a monorepo and an example repo only we are using a typescript path alias
// whereas this would typically be published to npm and reused in all domain service
function validate(
  obj,
  schema,
  key,
  ref
) {
  const ajv = new Ajv(ajvOptions);
  addFormats(ajv);

  ajv.addVocabulary([
    'asyncapi',
    'info',
    'servers',
    'channels',
    'components',
    'x-parser-api-version',
    'x-parser-spec-parsed',
    'x-parser-schema-id',
    'x-parser-circular',
    'x-parser-message-parsed',
    'x-parser-original-traits',
    'x-parser-original-schema-format',
    'x-parser-message-name',
    'x-parser-original-payload',
  ]);

  ajv.addSchema(schema, key);

  const valid = ajv.validate({ $ref: ref }, obj);

  if (!valid) {
    const errorMessage = JSON.stringify(ajv.errors);
    throw new Error(errorMessage);
  }

  return valid;
}

module.exports = { validate };