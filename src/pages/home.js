import React, {useState} from 'react'
import homeImage from '../assets/homeImage.jpg'

export default function Home({history}) {    

    const [checked,setChecked] = useState('option1');

    return (
        <div className='content'>
            
            <div className='homeMenu'>

                <div className="radio">
                    <label>
                        <input type="radio" name="radios" className='radio-input' checked={checked === 'option1' ? true : false} onChange={()=>setChecked('option1')}/>
                        <span className='radio-text' > Iniciar novo ensaio </span>
                    </label>
                    <label>
                        <input type="radio" name="radios" className='radio-input' checked={checked === 'option2' ? true : false} onChange={()=>setChecked('option2')}/>
                        <span className='radio-text' > Carregar arquivo de ensaio </span>
                    </label>
                </div>
                
                <div className="divButton">
                    <button className='btn blue' onClick={()=>history.push(checked)} >Avançar</button>
                </div>

            </div>
            
            <img src={homeImage} alt="home" className='homeImage' />
        
        </div>
    )

}