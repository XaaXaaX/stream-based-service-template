const { validator } = require('../validator');

let body = {
    specVersion: "1",
    idempotencyKey: 'AAAAAAAAAAAAAAAAAAAAAAAA',
    scope: 'ordermanagement:order',
    eventType: 'INSERT',
    eventName: 'NOTIFICATION',
    contentType: 'JSON',
    ref: 'NotificationEvent#/components/schemas/NotificationEvent',
    metadata:{ }
};

Promise.resolve(
    validator.validate( body ))
    .then(() => console.log("Event respects the enterrise specification"))
    .catch( (error) => logErrors(error));


body = {
    specVersion: "1",
    idempotencyKey: 'AAAAAAAAAAAAAAAAAAAAAAAA',
    scope: 'ordermanagement:order',
    eventType: 'INSERT',
    eventName: 'INTEGRATION',
    contentType: 'JSON',
    ref: 'IntegrationEvent#/components/schemas/IntegrationEvent',
    data: { 
        metadata: {
            YourEntityNameId: 'lj0OVlHFdHz9hHfgXUSoW',
            state: 'YourEntityNameCreated'
        }
    }
};

Promise.resolve(
    validator.validate( body ))
    .then(() => console.log("Event respects the Order Notification Specifications"))
    .catch( (error) => logErrors(error));

function logErrors(error) {
    const msg = { Errors: JSON.parse(error.message) };
    console.log(msg);
}

