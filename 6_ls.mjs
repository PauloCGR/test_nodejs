import fs from 'node:fs'

fs.readdir('.', (err, files) => {
    if (err){
        console.error('Error al leer directorio: ', err)
        return;
    }
    
    files.forEach(file => {
        console.log(file)
    });
})