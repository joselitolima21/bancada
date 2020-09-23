import cryptFiles from '../functions/cryptFiles'
const fs = window.require('fs')
const {dialog} = window.require('electron').remote;

export default {

    //Salva o arquivo
    save(name, content) {

        let nameTrim = name.replace(/\s/g, '')

        let optionsShow = {
            title: "Salvar Ensaio",
            defaultPath : `${nameTrim}.aero`,
            buttonLabel : "Save",
  
            filters :[
              {name: 'aero', extensions: ['aero',]},
             ]
          }
  
        dialog.showSaveDialog(optionsShow).then((result) => {
            const cancel = result.cancelled
            const path = result.filePath
            let wstream = fs.createWriteStream(path)
            wstream.on('finish', function () {
                console.log(`Arquivo salvo em ${path}`);
            });
            wstream.write(cryptFiles.crypt(JSON.stringify(content)))
            wstream.end()
        })
    },
    //Ler o arquivo
    read() {

        let optionsOpen = {
            title: "Abrir Ensaio",
            filters :[
              {name: 'aero', extensions: ['aero',]},
             ],
            properties: ['openFile']
          }

        const filePath = dialog.showOpenDialogSync(optionsOpen)

        if(filePath) {
            let text = fs.readFileSync(filePath[0]).toString()
            const result = cryptFiles.decrypt(text)
            return JSON.parse(result)
        }
        else {
            return 'Nenhum arquivo'
        }        
    }
}

