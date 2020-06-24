import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove'
import CropIcon from '@material-ui/icons/Crop169'
import CloseIcon from '@material-ui/icons/Close'
import controls from '../functions/windowControls'

export default function Header() {
    return (
    <div className='header'>
        <div className='container-icons'>
            <button className='window-icons left' onClick={()=>controls.handleMinimize()}>
                <RemoveIcon className='icon' style={{fontSize: 20}}/>
            </button>

            <button className='window-icons' onClick={()=>controls.handleMaximize()} >
                <CropIcon className='icon' style={{fontSize: 20}}/>
            </button>
        
            <button className='window-icons rigth' onClick={()=>controls.handleClose()}>
                <CloseIcon className='icon' style={{fontSize: 20}}/>
            </button>
        </div>
    </div>
    )
};