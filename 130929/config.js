/* Application configuration file */

var database = {
    HOST: 'example.com',
    PORT: 3306,
    NAME: 'database',
    USER: 'user',
    PASS: 'pass'
}

module.exports = function get(name){
    return config[name];
}
