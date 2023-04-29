import React from 'react';

import './PasswordLength.scss';

function PasswordLength({ length, setLength }) {
    const handleChange = (event) => {
        setLength(parseInt(event.target.value, 10));
    };

    return (
        <section className="password__length">
            <label>
                Character Length <span>{length}</span>
            </label>

            <input
                className='password__length--input'
                type="range"
                name="length"
                min="1"
                max="20"
                value={length}
                onChange={handleChange}
            />
        </section>

    );
}

export default PasswordLength;