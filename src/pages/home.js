import React from 'react'
import homeImage from '../assets/homeImage.jpg'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'


export default function Home() {

    const ColorButton = withStyles(() => ({
        root: {
          color: '#EFEEF2',
          textTransform: 'none',
          backgroundColor: '#6045E2',
          '&:hover': {
            backgroundColor: '#6045E2',
          },
          fontFamily: 'Roboto',
          width: '60%',
        },
    }))(Button);
    

    const [option, setOption] = React.useState('1');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div className='content'>
            
            <div className='homeMenu'>
                <div className="radio">
                    <FormControl component="fieldset" >
                        <RadioGroup aria-label="gender" name="gender1" value={option} onChange={(event) => handleChange(event)}>
                            <FormControlLabel value='1' control={<Radio style={{ color: '#6045E2'}} />} label="Iniciar novo ensaio" />
                            <FormControlLabel value='2' control={<Radio style={{ color: '#6045E2'}}/>} label="Carregar ensaio salvo" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="buttonOption1">
                    <ColorButton  variant='contained' color='primary' className='Dale'>Avançar</ColorButton>
                </div>
           
            </div>
            
            <img src={homeImage} alt="home" className='homeImage' />
        
        </div>
    )

}