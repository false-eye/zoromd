import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+91 9539901834', ' 𝑓𝑎𝑙𝑠𝑒 𝑒𝑦𝑒', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = ['919539901834'] // Want some help?
global.prems = ['919539901834'] // Premium user has unlimited limit

// api key here okay
global.xyro = 'LyrK9JMI7N' // https://api.xyroinee.xyz free limit unlimited
global.apilol = 'BrunoSobrino_2' // https://api.lolhuman.xyz free limit unlimited by @BrunoSobrino

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

 global.thumbnailUrl = [
  'https://telegra.ph/file/96f83e95d632f391cc9e7.jpg', 'https://telegra.ph/file/6d8b0e4f9ff01415462d1.jpg',
  'https://telegra.ph/file/cd2f9a052be9ec05809af.jpg', 'https://telegra.ph/file/1e3abb2e79963325e4f9d.jpg',
  'https://telegra.ph/file/4e65b1070a212bac14cd0.jpg', 'https://telegra.ph/file/0a188ab9ffdb87c233dee.jpg',
  'https://telegra.ph/file/4aa0d2b8d49062304c9f2.jpg', 'https://telegra.ph/file/4d948d098c465c6d9a312.jpg',
  'https://telegra.ph/file/cabeb1f092249ff55604a.jpg', 'https://telegra.ph/file/e1ead2e5c46f042701175.jpg'
]

// Sticker WM
global.packname = `9ine9ine9ine`
global.author = ' 𝑓𝑎𝑙𝑠𝑒 𝑒𝑦𝑒'
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = ' 𝑓𝑎𝑙𝑠𝑒 𝑒𝑦𝑒'
global.bott = '𝑤𝑟𝑙𝑑 𝑜𝑛 𝑗𝑢𝑖𝑐𝑒'
global.nomorown = '919539901834'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
