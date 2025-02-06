import fs from 'node:fs'

console.log('reading first file...')
fs.readFile('./file2.txt', 'utf-8', (err, text) =>{ //callback
    //codigo a ejecutar una vez leido el documento
    console.log(text) 
})

console.log('makin backups...')

console.log('reading second file...')
fs.readFile('./file.txt', 'utf-8', (err, text) =>{ //callback
    //codigo a ejecutar una vez leido el documento
    console.log(text) 
})