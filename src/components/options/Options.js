import React from 'react';

import './Options.scss';

function Options({ options, setOptions }) {
    const handleChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    return (
        <section className='password__options'>
            <label>
                <input
                    type="checkbox"
                    name="uppercase"
                    checked={options.uppercase}
                    onChange={handleChange}
                />
                Include Uppercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    name="lowercase"
                    checked={options.lowercase}
                    onChange={handleChange}
                />
                Include Lowercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    name="numbers"
                    checked={options.numbers}
                    onChange={handleChange}
                />
                Include Numbers
            </label>
            <label>
                <input
                    type="checkbox"
                    name="symbols"
                    checked={options.symbols}
                    onChange={handleChange}
                />
                Include Symbols
            </label>
        </section>
    );
}

export default Options;