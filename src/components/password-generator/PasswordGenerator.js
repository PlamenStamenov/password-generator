import React, { useState } from 'react';
import Button from '../button/Button';
import Options from '../options/Options';
import PasswordDisplay from '../password-display/PasswordDisplay';
import PasswordStrength from '../password-strength/PasswordStrength'
import { generatePassword, calculateStrength } from '../../utils/index';

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

  return (
    <div>
      <PasswordDisplay password={password} />
      <PasswordStrength strength={strength} />
      <Options options={options} setOptions={setOptions} />
      <Button onClick={handleGeneratePassword}>Generate Password</Button>
    </div>
  );
}

export default PasswordGenerator;