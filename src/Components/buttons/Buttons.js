import React from 'react'
import './Buttons.css'

export const Buttons = () => {
    return (
        <div className='buttons'>
            <button 
            className="btn btn-primary "
            >Save</button>
            
            <button 
            type='reset'
            className="btn btn-light cancelButton"
            >Cancel</button>
        </div>
    )
}