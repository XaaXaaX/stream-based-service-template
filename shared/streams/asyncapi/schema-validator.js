const { Parser, fromFile } = require('@asyncapi/parser');
const validator = require('./ajv-validator');

class SchemaValidator {
    schema; 
    asyncapiParser;
    defaultFile = 'asyncapi.yaml';
    defaultversion = 'v1';
    ajvValidator = validator;
    constructor(version, path, file) {
        this.file = file ?? this.defaultFile ;
        this.version = version ?? this.defaultversion;
        this.path = path;
        this.asyncapiParser = new Parser();
    }

    getParser = async (path) => {
        return await fromFile(this.asyncapiParser, path).parse();
    }       

    initSchema = async (specVersion) => {
        const ver = specVersion ?? this.version;
        if( !this.schema ) {
            const data = await this.getParser(`${this.path}/${ver}/${this.file}`);
            this.schema = data.document.json();
        }
    }

    validate = async (event) => {
        await this.initSchema(this.version);
        return this.ajvValidator.validate(event, this.schema, event.ref.split('#')[0], event.ref);
    }
}

module.exports = {
    SchemaValidator
}
