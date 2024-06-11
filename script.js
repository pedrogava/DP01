// Exercicio 1
let variavelUndefined;
const variavelVazia = ''
const variavelValor = 'Hello World'

console.log(variavelUndefined)
console.log(variavelVazia)
console.log(variavelValor)

// Exercicio 2
let a = 5 
let b = 25

// Exemplos de cada uso dos operdaores
console.log(`a != b: ${a != b}`)
console.log(`a == b: ${a == b}`)
console.log(`b >= a: ${b >= a}`)
console.log(`b<=a: ${b <= a}`)

//Exercicio 3
// função para calcular o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let mensagem;
    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso ideal";
    } else {
        mensagem = "Acima do peso";
    }
    return `IMC: ${imc.toFixed(2)} - ${mensagem}`;
}

// Valores utilizados de exemplo 
//Peso: 70 Altura: 1.75 
console.log(`${calcularIMC(70, 1.75)}`)



