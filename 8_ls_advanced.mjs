import fs from 'node:fs'

var folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files) => {
    if (err){
        console.error('Error al leer directorio: ', err)
        return;
    }
    //cansado de vivir, que mas da  
    files.forEach(file => {
        console.log(file)
    });
})