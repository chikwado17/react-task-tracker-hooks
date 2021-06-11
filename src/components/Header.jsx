import React from 'react';
import Button from './Button';

const Header = () => {

    const onClick = () => {
        alert('clicked');
    }

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onClick} color='green' text='Add' />
        </header>
    )
}

export default Header
