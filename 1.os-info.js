//Importar modulos nativos de
//const os = require('os')
const os = require('node:os')

console.log('Operative System Info:')
console.log('----------------------')
console.log('OS name: ', os.platform())
console.log('OS version: ', os.release())
console.log('OS Arch: ', os.arch())
//console.log('CPUs: ', os.cpus()) //importante para escalar procesos en Node
console.log('Free memory: ', os.freemem() / 1024 / 1024)
console.log('Used memory: ', os.totalmem() / 1024 / 1024)
console.log('uptime: ', os.uptime() / 60 / 60)