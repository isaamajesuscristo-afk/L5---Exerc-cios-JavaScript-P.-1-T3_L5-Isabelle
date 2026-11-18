function dobro(x) {
  return x * 2;
}

const media = (lista) => {
  let soma = 0;
  for (const n of lista) {
    soma += n;
  }
  return soma / lista.length;
};

console.log(dobro(21));
console.log(media([8, 6.5, 9, 4]));

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3));

function ehPar(n) {
  return n % 2 === 0;
}
console.log(ehPar(4));
console.log(ehPar(7));