import React from 'react'

const Button = ({ color, text, onClick }) => {  
    return (
        <div>
            <button className="btn" onClick={onClick} style={{backgroundColor: color }}>{text}</button>
        </div>
    )
}

export default Button;
