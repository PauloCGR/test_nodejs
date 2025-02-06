import {readFile} from 'node:fs/promises'

console.log('reading first file...')
const text = await readFile('./file2.txt', 'utf-8')
console.log('Primer texto', text)

console.log('makin backups...')

console.log('reading second file...')
const text2 = await readFile('./file.txt', 'utf-8')
console.log('Segundo texto', text2)

console.log('proces photos...')