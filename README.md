# Stream-based-service-template

The project is a steam based project template introduced as a github template to simplify the standardization and best practice sharing in an organization.

This is a proposition toward simplifing the DEX in SDLC and atthe same time make standards centralized.

The Project template consists of a example of async api stream and validators

## Async API defiition

The Async Api definition is located in `~/shared/streams/YourDomainName/v1` under `asyncapi.yaml` file name.

## Sheman Validator

### Generic schema validation

The Shcema Validator is a generic nodejs code that validate hthe event against a schema path in definition
It is located in `~/shared/streams/asyncapi` with `schema-validator.js` file name

### Domain Schema Validation

The Domain Schema Validator is located in `~/shared/streams/YourDomainName/validation` and provides the a schemavalidator construct per definition version.

## Costribution

Clone the project:

``` shell
git clone https://github.com/XaaXaaX/stream-based-service-template.git
```

Install dependencies:
``` shell
cd shared/streams && npm i
```

Test validator:
Open the `shared/streams/YourDomainName/validation/tests/specvalidator` file.

Open the vscode Debuging tool and run  Launch stream doc validation.

You must have following result with base template

```
Event respects the enterrise specification
Event respects the Order Notification Specifications
```
