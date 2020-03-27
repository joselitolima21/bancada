import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove'
import CropIcon from '@material-ui/icons/Crop169'
import CloseIcon from '@material-ui/icons/Close'

export default function Header() {
    return (
    <div className='header'>
        <div className='container-icons'>
            <button className='window-icons left'>
                <RemoveIcon className='icon'/>
            </button>

            <button className='window-icons'>
                <CropIcon className='icon'/>
            </button>
        
            <button className='window-icons rigth'>
                <CloseIcon className='icon'/>
            </button>
        </div>
    </div>
    )
};