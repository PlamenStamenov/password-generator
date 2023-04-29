import React from 'react';
import './PasswordStrength.scss';

const strengthColors = ['#ff4b4b', '#ffa500', '#ffff00', '#4caf50'];
const strengthTexts = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

function PasswordStrength({ strength }) {
    return (
        <section className='password__strength'>
            <span>
                {strength === 0 ? 'STRENGTH' : strengthTexts[strength - 1]}
            </span>
            
            <div className="password__strength_levels">
                {strengthColors.map((color, index) => (
                    <div
                        className='password__strength_level'
                        key={index}
                        style={{
                            backgroundColor: strength > index ? color : 'transparent',
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}

export default PasswordStrength;