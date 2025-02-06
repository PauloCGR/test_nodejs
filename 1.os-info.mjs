//Importar modulos nativos de
//const os = require('os')
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
import os from 'node:os'

console.log('Operative System Info:')
console.log('----------------------')
console.log('OS name: ', platform())
console.log('OS version: ', release())
console.log('OS Arch: ', arch())
console.log('CPUs: ', os.cpus()) //importante para escalar procesos en Node
console.log('Free memory: ', freemem() / 1024 / 1024)
console.log('Used memory: ', totalmem() / 1024 / 1024)
console.log('uptime: ', uptime() / 60 / 60)