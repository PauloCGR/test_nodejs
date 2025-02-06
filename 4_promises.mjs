import fs from 'node:fs/promises'

console.log('reading first file...')
fs.readFile('./file2.txt', 'utf-8')
    .then(text => {
        console.log('Primer texto', text)
    })

console.log('makin backups...')

console.log('reading second file...')
fs.readFile('./file.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto', text)
    })