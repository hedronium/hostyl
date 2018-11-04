const fs = require('fs');

module.exports = () => {
    return fs.readFileSync('/etc/hosts', {encoding: 'utf8'})
        .split('\n')
        .map(line => line.trim())
        .filter(line => line[0] !== '#' && line.length >= 9)
        .map(line => {
            const [ip, host] = line.split(/\s+/).map(term => term.trim());

            return {
                host: host.toLowerCase(),
                ip: ip.toLowerCase()
            }
        }).sort((a, b) => {
            if (a.host.split('').reverse().join('') > b.host.split('').reverse().join('')) {
                return 1;
            }

            return -1;
        });
};