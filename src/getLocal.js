const fs = require('fs');
const ip = require('ip');


module.exports = (filename) => {
    let contents = '{}';
    let data = null;

    const lfile = `${process.cwd()}/${filename}`;

    if (fs.existsSync(lfile)) {
        contents = fs.readFileSync(lfile, {encoding:'utf8'});
    }

    try {
        data = JSON.parse(contents);
    } catch (e) {
        data = {};
    }


    ready = {};

    Object.keys(data).filter(key => {
        const val = String(data[key]);
        
        if (ip.isV4Format(val) || ip.isV6Format(val)) {
            return true;
        }

        return false;
    }).forEach(key => {
        ready[key] = data[key]
    });


    return ready;
}