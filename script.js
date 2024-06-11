// Exercicio 1
//Variaveis com os valores necessários
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
    let imc = peso / (altura * altura)
    let mensagem
    if (imc < 18.5) {
        mensagem = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso ideal"
    } else {
        mensagem = "Acima do peso"
    }
    return `IMC: ${imc.toFixed(2)} - ${mensagem}`
}

// Valores utilizados de exemplo 
//Peso: 70 Altura: 1.75 
console.log(calcularIMC(70, 1.75))

// Exercicio 4

//Função para verificação da faixa etária em relação a idade
function verificarFaixaEtaria(idade) {
    let faixa;
    if (idade <= 12) {
        faixa = "Criança"
    } else if (idade <= 18) {
        faixa = "Adolescente"
    } else if (idade <= 60) {
        faixa = "Adulto"
    } else {
        faixa = "Idoso"
    }
    return `Idade: ${idade} - Faixa etária: ${faixa}`
}

// Exemplo utilizado na saida foi 25 anos
console.log(verificarFaixaEtaria(25))

// Exercicio 5

//Função de verificação
function verificarLogin(usuario, senha) {
    const usuarioCadastrado = "admin"
    const senhaCadastrada = "1234"
    if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
        return "Login realizado com sucesso"
    } else {
        return "Falha na autenticação"
    }
}

//Passarei duas Saidas uma com o usuario certo e outro errado

console.log(`Usuario: admin / Senha: 1234 \n${verificarLogin('admin','1234')}`)
console.log(`Usuario: ADM / Senha: 5678 \n${verificarLogin('ADM','5678')}`)

//Exercicio 6

//Função para calcula a Média das notas (parametroda função é um array)
function calcularMedia(notas) {
    let soma = 0
    let cont = 0
    for (let cont = 0; cont < notas.length; cont ++){
        soma = notas[cont] + soma
    }

    let media = soma / notas.length

    if (media >= 6){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

// Saida com a média do arry passado como parametro
console.log(`Média: ${calcularMedia([7,8,9,10,5,6,7])}`)









