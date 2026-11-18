# Respostas dos Checkpoints e outras questões

Isabelle Cecato – Turma 1F

---

## Etapa 0

1. Apareceu na aba **Console**.
2. O `defer` faz o navegador carregar o HTML todo antes de rodar o script. Assim, os elementos da página já existem quando o JavaScript for usar eles.
3. O navegador não acharia o arquivo, então o código não rodaria e nada apareceria no console.

## Etapa 1

Resultados no console: `5`, `"Web I"`, `"53"`, `2`, `14` e `20`.

1. Quando um lado do `+` é texto, ele junta em vez de somar, por isso `"5" + 3` deu `"53"`. Já o `-` só faz conta, então o `"5"` virou número e deu 2.
2. A multiplicação é feita antes da soma. Com parênteses, a soma vem primeiro.

## Etapa 2

1. Vai imprimir `string`, `number`, `boolean` e `undefined`.
2. Deu `Assignment to constant variable`, porque `escola` é `const` e não pode ser trocada.
3. Válidos: `nota_final` e `$total`. Inválidos: `3nota` (começa com número), `nota-final` (tem hífen) e `class` (palavra reservada).
4. Imprime `16`.

## Etapa 3

1. A saída é:
   ```
   9 5 14
   3.5
   1
   49
   Olá, Ana! 7 dividido por 2 é 3.5.
   8.5
   7.51
   NaN
   ```
2. `Number("7.5") + 1` dá `8.5`, porque vira número. `"7.5" + 1` dá `"7.51"`, porque junta texto. Num formulário, tudo chega como texto, então preciso converter antes de fazer conta.
3. `10 % 3` dá `1`, `2 ** 3` dá `8` e `10 / 4` dá `2.5`.

## Etapa 4

1. Com 20 aparece "Agradável", porque 20 é maior ou igual a 20. Com 30 aparece "Calor", porque cai na primeira condição.
2. A saída é `true`, `false`, `true`, `false`. Uso `===` porque ele compara valor e tipo, e o `==` converte e dá resultados estranhos.
3. `nota >= 0 && nota <= 10`

## Etapa 5

1. Imprime `6.875`.
2. O primeiro é o índice `0` e o último é `length - 1`.
3. ```js
   for (let i = 2; i <= 10; i += 2) {
     console.log(i);
   }
   ```
4. O total vai de 1, para 3, para 6 e para 10. Imprime `10`.

## Etapa 6

1. Imprime `undefined`, porque falta o `return`. Corrigindo: `return a + b;`.
2. ```js
   function ehPar(n) {
     return n % 2 === 0;
   }
   ```
3. O `console.log` só mostra o valor no console. O `return` devolve o valor para quem chamou a função.

## Etapa 7

1. Dá `Cannot set properties of null`. Sem o `defer`, o script roda antes da página carregar, e o elemento ainda não existe.
2. A cada clique, a função soma 1 em `cliques`, mostra o número na tela e muda o botão para "Clicado!".
3. Porque o valor muda a cada clique, e `const` não muda.

## Etapa 8

1. `n1 + n2 / 2` faz a divisão antes da soma. Com 8 e 6 daria 11, mas a média certa é 7. Por isso uso `(n1 + n2) / 2`.
2. ```js
   function notaValida(n) {
     return !Number.isNaN(n) && n >= 0 && n <= 10;
   }
   ```
3. Testes: 8 e 7 mostra "Média: 7.5 - Aprovado". 5 e 6 mostra "Média: 5.5 - Abaixo da média". 6 e 6 mostra "Média: 6.0 - Aprovado". 10 e 10 mostra "Média: 10.0 - Aprovado". Campo vazio ou 11 mostram a mensagem de erro.
4. A média fica numa função separada para o código ficar organizado e para eu poder testar ela sozinha.
5. Mudaria só uma linha: `const NOTA_MINIMA = 7;`.
