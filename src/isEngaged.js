const fs = require('fs');

module.exports = () => {
    return fs.readFileSync('/etc/hosts', {encoding: 'utf8'})
                .split('\n')[0].trim() === '#--WANRING: HOSTYL ENVIRONMENT';
}