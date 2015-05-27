var findRemoveSync = require('find-remove');
var config = require('./config.json');

if (config.directory != 'C:\\' || config.directory != 'D:\\')
{
    var result = findRemoveSync(config.directory, {
        age: {seconds: 86400 * config.days}, test: config.testmode
    });

    console.log(result);
}