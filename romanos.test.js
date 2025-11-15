// En romanos.test.js
const convertirARomano = require("./romanos");

test('debería convertir 1 a "I"', () => {
  expect(convertirARomano(1)).toBe("I");
});

test('debería convertir 2 a "II"', () => {
  expect(convertirARomano(2)).toBe("II");
});

test('debería convertir 3 a "III"', () => {
  expect(convertirARomano(3)).toBe("III");
});

test('debería convertir 4 a "IV"', () => {
  expect(convertirARomano(4)).toBe("IV");
});

test('debería convertir 5 a "V"', () => {
  expect(convertirARomano(5)).toBe("V");
});

test('debería convertir 9 a "IX"', () => {
  expect(convertirARomano(9)).toBe("IX");
});
