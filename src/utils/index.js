import _ from 'lodash';

const CHARSET = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_-+=<>?/',
};

function getRandomCharacter(charset) {
  return charset[Math.floor(Math.random() * charset.length)];
}

export function generatePassword(options) {
  const { length, uppercase, lowercase, numbers, symbols } = options;
  let charset = '';

  if (uppercase) charset += CHARSET.uppercase;
  if (lowercase) charset += CHARSET.lowercase;
  if (numbers) charset += CHARSET.numbers;
  if (symbols) charset += CHARSET.symbols;

  if (charset === '') {
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(charset);
  }

  return password;
}

export function calculateStrength(password) {
  const passwordLength = password.length;

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumbers = false;
  let hasSymbols = false;

  for (let i = 0; i < passwordLength; i++) {
    const char = password[i];

    if (!hasUppercase && CHARSET.uppercase.includes(char)) {
      hasUppercase = true;
    }
    if (!hasLowercase && CHARSET.lowercase.includes(char)) {
      hasLowercase = true;
    }
    if (!hasNumbers && CHARSET.numbers.includes(char)) {
      hasNumbers = true;
    }
    if (!hasSymbols && CHARSET.symbols.includes(char)) {
      hasSymbols = true;
    }
  }

  let strength = 0;

  if (hasUppercase) strength += 1;
  if (hasLowercase) strength += 1;
  if (hasNumbers) strength += 1;
  if (hasSymbols) strength += 1;
  if (passwordLength >= 8) strength += 1;

  return strength;
}