import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/about">About Project</Link>
            <p>&copy; 2020 EmmanuelDev | React Json Project</p>
        </footer>
    )
}

export default Footer
