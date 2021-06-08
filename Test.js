var newman = require('newman'); // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./Customer_collection.json'),
    environment: require('./Customer_environment.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});