import React from 'react';

import './Button.scss'

function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}

export default Button;