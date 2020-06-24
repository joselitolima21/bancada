import React from 'react'
import homeImage from '../assets/homeImage.jpg'

export default function Option1({ history }) {


    return (
        <div className='content'>

            <div className='homeMenu'>

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Nome para o ensaio"
                />

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Hélice acoplada"
                />

                <div className="buttonsInline">
                    <button className='btn white' onClick={() => history.push('/')} >Mudar Escolha</button>
                    <button className='btn blue'>Avançar</button>
                </div>

            </div>

            <img src={homeImage} alt="home" className='homeImage' />

        </div>
    )

}