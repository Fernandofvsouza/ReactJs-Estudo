/*

JSX é uma sintaxe para escrever html em javascript

*/

const elemento = <h1 className = 'title'>Hello React World JSX</h1>//Esse h1 não é uma string, muito menos uma tag html, e sim um objeto jsx que fica salvo na memoria e depois é renderizado no dom real, alem disso podemos dar uma classe a esse elemento usando className

ReactDOM.render(
    elemento,
    document.getElementById('root')
)

//O jsx aceita expressoes, ou seja, podemos colocar javascript dentro dele
const nome = 'João'
const info = {
    sobrenome: 'Silva',
    idade: 20,
    cidade: 'São Paulo'
}
const infoEstudo = {
    linguagem: 'JavaScript',
    niveis: ['basico', 'intermediario', 'avancado']
}
function estudo(infoEstudo) {
    return infoEstudo.linguagem
}
const elemento2 = <h1 className = 'info-pessoal'>Hello {nome} {info.sobrenome} que tem {info.idade} anos e mora em {info.cidade} e estuda {estudo(infoEstudo)}</h1> //Podemos colocar função, variaveis, objetos e etc

ReactDOM.render(
    elemento2,
    document.getElementById('root')
)

//Podemos colocar mais elementos dentro de um jsx
const pagina = (
    <div>
        <h1>Isso é um titulo</h1>
        <p>Isso é um paragrafo feito com react</p>
    </div>
)

ReactDOM.render(
    pagina,
    document.getElementById('app')
)