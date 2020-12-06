import React from 'react'
import "./styles.css"

function ErrorMessage({message}) {
    return (
        <div >
            <p className="error">{message}</p>
        </div>
    )
}

export default ErrorMessage;
