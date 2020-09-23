import React, { useState } from 'react'
import homeImage from '../assets/homeImage.jpg'
import files from '../functions/manageFile'

export default function Option2({ history }) {

    const [file,setFile] = useState('Nenhum arquivo')

    return (
        <div className='content'>

            <div className='homeMenu'>
                
                <button className="selectBox" onClick={async (event)=>{
                    const infoOfFile = files.read()
                    if(infoOfFile.name) {
                        setFile(infoOfFile.name)
                    } else {
                        setFile(infoOfFile)
                    }
                }}>
                    {file}
                </button>
                
                <div className="buttonsInline">
                    <button className='btn white' onClick={() => history.push('/')} >Mudar Escolha</button>
                    <button className='btn blue'>Avançar</button>
                </div>

            </div>

            <img src={homeImage} alt="home" className='homeImage' />

        </div>
    )

}