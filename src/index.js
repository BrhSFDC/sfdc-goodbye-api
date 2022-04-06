let findVersions = require('../lib/findVersions');

let connection = {
    token: '00D760000008aIZ!ARgAQBb.esb3ryXz9q8yiligSB15KIGQHi8QoUsy3pula2_._hYbSKZaJFEswzwCrpa8R64jWQk8OsAVUpkH9G1G1wgFd71k',
    url:'https://brighthorizons--full.my.salesforce.com',
    apiVersion:'50.0',
    apiThreshold:20
};

console.log('Starting...');
findVersions(connection).then(()=> console.log('Done! Check the log files in the results/ folder'))
