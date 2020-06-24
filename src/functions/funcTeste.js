const SerialPort = window.require('serialport');
//Requerindo o parser - interpreta o hexadecimal
const Readline = window.require('@serialport/parser-readline');

// Iniciando a conexão
export default () => {
    const port = new SerialPort("/COM7", { baudRate: 115200 },
        (err)=>{
            if(err){
                console.log(err)
                //process.exit()
                }
        }) 

    // Adicionando o parser na conexão
    const parser = new Readline()
    port.pipe(parser)
    return {port,parser}
}