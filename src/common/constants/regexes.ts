export const regexes = {
  digit: /^\d+$/,
  onlyChar: /^[aA-zZ\s]+$/,
  oneNumber: /(?=.*?[0-9]).*/,
  oneLetter: /[A-Za-z]+/,
  withoutSpaces: /^\S.*\S$/,
  onlyOneSpace: /^(?!.*\s{2,}).*$/,
  email: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  phoneNumber: /^\d{10}$/,
};