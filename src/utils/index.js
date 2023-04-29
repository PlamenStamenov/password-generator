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

  let characterSetSize = 0;

  if (password.match(/[A-Z]/)) {
    characterSetSize += CHARSET.uppercase.length;
  }
  if (password.match(/[a-z]/)) {
    characterSetSize += CHARSET.lowercase.length;
  }
  if (password.match(/[0-9]/)) {
    characterSetSize += CHARSET.numbers.length;
  }
  if (password.match(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\>\?\/]/)) {
    characterSetSize += CHARSET.symbols.length;
  }

  const passwordStrength = passwordLength * Math.log2(characterSetSize);

  // Normalize the password strength to a value between 0 and 1
  const normalizedStrength = passwordStrength / (Math.log2(95) * 32); // Assuming maximum strength as 32 characters with 95 possible characters

  // Map the normalized strength to a value between 1 and 4
  const strengthValue = Math.ceil(normalizedStrength * 4);

  // Ensure the strength value is within the range of 1 to 4
  return Math.min(Math.max(strengthValue, 1), 4);
}