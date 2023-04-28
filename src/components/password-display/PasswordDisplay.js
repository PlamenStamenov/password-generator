import React from 'react';

function PasswordDisplay({ password }) {
    return (
        <>
            <input type="text" value={password} readOnly />
            <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        </>
    );
}

export default PasswordDisplay;