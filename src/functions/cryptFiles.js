const crypto = require('crypto')
const alg = 'aes-256-ctr'
const psw = '12345678912345678912345678912345'

export default {
    crypt(text) {
        const iv = crypto.randomBytes(16)
        const cipher = crypto.createCipheriv(alg,psw,iv)
        const crypted = iv.toString('hex')+':'+ cipher.update(text,'utf8','hex') + cipher.final('hex')
        return crypted
    },

    decrypt(text) {
        const parts = text.split(':')
        const decipher = crypto.createDecipheriv(alg,psw,new Buffer(parts[0],'hex'))
        const plain = decipher.update(parts[1],'hex','utf8') + decipher.final('utf8')
        return plain
    },
}


