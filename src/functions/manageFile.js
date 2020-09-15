import cryptFiles from '../functions/cryptFiles'
const path = window.require('path')
const fs = window.require('fs') 
const dir = path.resolve()

export default {

    //Salva o arquivo
    save(name,content) {
        let nameTrim = name.replace(/\s/g, '')

        let wstream = fs.createWriteStream(`${dir}/${nameTrim}`)
        wstream.on('finish', function () {
            console.log(`Arquivo salvo em ${dir}/${nameTrim}`);
        });
        wstream.write(cryptFiles.crypt(JSON.stringify(content)))
        wstream.end()
        },

    //Ler o arquivo
    read(fileName){
        let rstream = fs.createReadStream(`${dir}/${fileName}`)
        rstream.on('data', function (chunk) { 
            const result = cryptFiles.decrypt(chunk.toString())
            console.log(JSON.parse(result))
        });
    }

}