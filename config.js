import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62883869785398', 'rfkhrmwnnn', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628xxx'
global.packname = 'A20 - MD by'
global.author = '© Kucing❤'
global.namebot = '​A20 - MD'
global.wm = '© A20 By Kucing❤'
global.stickpack = 'A20 - MD by'
global.stickauth = '© Kucing❤'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/'
global.ptrakterr = 'https://trakteer.id/'
global.povo = '08886291836'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'base-dumes'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    lol: "https://api.lolhuman.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.lolhuman.xyz": "base-dumes",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

