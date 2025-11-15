// romanos.js
function convertirARomano(numero) {
  let resultado = "";

  if (numero >= 9) {
    resultado += "IX";
    numero -= 9;
  } else if (numero === 4) {
    resultado += "IV";
    numero -= 4;
  } else if (numero >= 5) {
    resultado += "V";
    numero -= 5;
  }

  while (numero >= 1) {
    resultado += "I";
    numero -= 1;
  }

  return resultado;
}

module.exports = convertirARomano;
