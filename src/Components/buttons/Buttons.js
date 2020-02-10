import React from 'react'
import './Buttons.css'

export default function Buttons(props) {
    return (
        <div className='buttons'>
            <button 
            type='submit'
            className="btn btn-primary"
            >Save</button>
            <button 
            type='reset'
            className="btn btn-light"
            
            >Cancel</button>
        </div>
    )
}