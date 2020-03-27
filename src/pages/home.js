import React from 'react'
import homeImage from '../assets/homeImage.jpg'

export default function Home() {    

    const [option, setOption] = React.useState('1');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div className='content'>
            
            <div className='homeMenu'>

                <div className="radio">
                    <label>
                        <input type="radio" name="radios" className='radio-input' checked/>
                        <text className='radio-text' > Iniciar novo ensaio </text>
                    </label>
                    <label>
                        <input type="radio" name="radios" className='radio-input'/>
                        <text className='radio-text' > Carregar ensaio salvo</text>
                    </label>
                </div>
                
                <div className="divButton">
                    <button className='btn blue'>Avançar</button>
                </div>
           
            </div>
            
            <img src={homeImage} alt="home" className='homeImage' />
        
        </div>
    )

}