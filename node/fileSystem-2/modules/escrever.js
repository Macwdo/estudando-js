const fs = require('fs').promises;

module.exports = (path, data) => {

    const json = JSON.stringify(data, ' ', 2)

    fs.writeFile(path, json, {
        flag: 'w',
        encoding: 'utf-8'
    })
    
}

