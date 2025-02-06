//const fs = require('node:fs') // a partir de node 16, se recomienda poner : antes de fs
import fs from 'node:fs'

const stats = fs.statSync('./file.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)