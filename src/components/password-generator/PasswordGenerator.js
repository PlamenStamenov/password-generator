import React, { useState } from 'react';
import Button from '../button/Button';
import Options from '../options/Options';
import PasswordDisplay from '../password-display/PasswordDisplay';
import PasswordStrength from '../password-strength/PasswordStrength';
import PasswordLength from '../password-length/PasswordLength';
import { generatePassword, calculateStrength } from '../../utils/index';
import { FaArrowRight } from 'react-icons/fa';

import './PasswordGenerator.scss';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [options, setOptions] = useState({
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(options);
        setPassword(newPassword);
        setStrength(calculateStrength(newPassword));
    };

    const setLength = (newLength) => {
        setOptions({ ...options, length: newLength });
    };


    return (
        <main className='main'>
            <PasswordDisplay password={password} />

            <div className="container">
                <PasswordLength length={options.length} setLength={setLength} />
                <Options options={options} setOptions={setOptions} />
                <PasswordStrength strength={strength} />
                <Button onClick={handleGeneratePassword}>Generate <FaArrowRight /></Button>
            </div>
        </main>
    );
}

export default PasswordGenerator;