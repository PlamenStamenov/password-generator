import React from 'react';

function Options({ options, setOptions }) {
    const handleChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    return (


        <div>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="uppercase"
                    checked={options.uppercase}
                    onChange={handleChange}
                />
                Uppercase
            </label>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="lowercase"
                    checked={options.lowercase}
                    onChange={handleChange}
                />
                Lowercase
            </label>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="numbers"
                    checked={options.numbers}
                    onChange={handleChange}
                />
                Numbers
            </label>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="symbols"
                    checked={options.symbols}
                    onChange={handleChange}
                />
                Symbols
            </label>
        </div>


    );
}

export default Options;