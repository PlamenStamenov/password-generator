import React from 'react';
import styles from './PasswordStrength.module.scss';

const strengthColors = ['#ff4b4b', '#ffa500', '#ffff00', '#4caf50'];
const strengthTexts = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

function PasswordStrength({ strength }) {
    return (
        <section className={styles.password__strength}>
            <span>
                {strength === 0 ? 'STRENGTH' : strengthTexts[strength - 1]}
            </span>
            {strengthColors.map((color, index) => (
                <div
                    className={styles.password__strength_level}
                    key={index}
                    style={{
                        backgroundColor: strength > index ? color : '#d3d3d3',
                    }}
                ></div>
            ))}
        </section>
    );
}

export default PasswordStrength;