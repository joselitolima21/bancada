import React, { useState } from 'react'
import homeImage from '../assets/homeImage.jpg'

export default function Option2({ history }) {

    const [file,setFile] = useState('valor1')

    return (
        <div className='content'>

            <div className='homeMenu'>
                
                <select className="selectBox" value={file} onChange={(event)=>setFile(event.target.value)}>
                    <option className='options' value="valor1">Valor 1</option>
                    <option className='options' value="valor2" >Valor 2</option>
                    <option className='options' value="valor3">Valor 3</option>
                </select>
                
                <div className="buttonsInline">
                    <button className='btn white' onClick={() => history.push('/')} >Mudar Escolha</button>
                    <button className='btn blue'>Avançar</button>
                </div>

            </div>

            <img src={homeImage} alt="home" className='homeImage' />

        </div>
    )

}