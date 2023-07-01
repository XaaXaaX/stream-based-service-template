const { SchemaValidator } = require('../../asyncapi/schema-validator');

const Version1 = 'v1', Version2 = 'v2';


const validator = new SchemaValidator(Version1, './shared/streams/YourDomainName', 'asyncapi.yaml');

module.exports = { validator, Version1, Version2 };
