import React from 'react';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({showForm,setShowForm}) => {

    const location = useLocation();

    const onClick = () => {
        setShowForm(!showForm)
    }

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {location.pathname === '/' &&
            <Button onClick={onClick} color={`${showForm ? 'red': 'green'}`} text={`${showForm ? 'Close': 'Add'}`} />}
        </header>
    )
}

export default Header
