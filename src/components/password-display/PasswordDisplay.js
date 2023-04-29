import React, { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

import './PasswordDisplay.scss';

function PasswordDisplay({ password }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset the icon to the copy icon after 2 seconds
  };

  return (
    <section className='password__display'>
      <input type="text" value={password} readOnly placeholder='P4$5W0rD!'/>
      <button onClick={handleCopyClick}>
        {isCopied ? (
          <FaCheck className='icon'/>
        ) : (
          <FaRegCopy className='icon'/>
        )}
      </button>
    </section>
  );
}

export default PasswordDisplay;