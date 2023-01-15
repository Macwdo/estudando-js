const fs = require('fs').promises;
const path =  require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}1

async function walk(files, rootDir){
    for( let file of files){
        const fileFP = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFP);
        if (stats.isDirectory()){
            readdir(fileFP);
            continue;
        }
        console.log(fileFP)

    }
}

readdir('/home/macwdo/Estudos/Javascript/curso-js/')


// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));
