import React from 'react'
import "./styles.css"

function SuccessMessage({message}) {
    return (
        <div >
            <p className="success">{message}</p>
        </div>
    )
}

export default SuccessMessage
