import React , { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/reducers/infoFileReducer'
import homeImage from '../assets/homeImage.jpg'

export default function Option1({ history }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.infoFileReducer)

    const [alert,setAlert] = useState(null)

    function goNext() {
        if(state.name && state.heliceType) {
            history.push('/work') 
        } 
        else if(state.name) {
            setAlert('helice')
        } 
        else if(state.heliceType) {
            setAlert('name')
        } 
        else {
            setAlert('ambos')
        }
    }

    return (
        <div className='content'>

            <div className='homeMenu'>

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Nome para o ensaio"
                    onChange={(event)=>{setAlert(null);dispatch(actions.updateName(event.target.value))}}
                />
                {(alert==='name' || alert==='ambos') && <h2 className='alert-text' >Digite um nome</h2>}

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Hélice acoplada"
                    onChange={(event)=>{setAlert(null);dispatch(actions.updateHelice(event.target.value))}}
                />
                {(alert==='helice' ||  alert==='ambos') && <h2 className='alert-text' >Especifique o tipo de hélice</h2>}

                <div className="buttonsInline">
                    <button className='btn white' onClick={() => history.push('/')} >Mudar Escolha</button>
                    <button className='btn blue' onClick={() => goNext()}>Avançar</button>
                </div>
                
            </div>

            <img src={homeImage} alt="home" className='homeImage' />

        </div>
    )

}