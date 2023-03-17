
function fibonacci(num) {
  let a = 0, b = 1, c = 0;
  
  if (num === a || num === b) {
    return true;
  }
  
  while (c < num) {
    c = a + b;
    a = b;
    b = c;
    
    if (c === num) {
      return true;
    }
  }
  
  return false;
}

//Testando o programa com exemplos
//Exemplo1
const numero = 21;
const pertence = fibonacci(numero);

if (pertence) {
  console.log(`${numero} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci`);
}

//Exemplo2
const numero2 = 51;
const pertence2 = fibonacci(numero2);

if (pertence2) {
  console.log(`${numero2} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numero2} não pertence à sequência de Fibonacci`);
}

