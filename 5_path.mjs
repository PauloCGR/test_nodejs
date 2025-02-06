import path from 'node:path'

//barra separadora de carpetas segun SO
console.log(path.sep)

//unir a rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/ruta/rutalarga/files/appdata/etc/file.extension')
console.log(base)

const filename = path.basename('/ruta/rutalarga/files/appdata/etc/file.extension', '.txt')
console.log(filename)

var ext = path.extname('image.png')
console.log(ext)