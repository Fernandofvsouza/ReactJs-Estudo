//Componentes, permitem voce dividir a interface grafice em partes independentes e reutilizaveis e pensar em cada parte isoladamente
//Componentes no react são funções javascript que retornam um jsx

//Exemplo de componente:
function BemVindo(props)//Todo componente deve começar com letra maiuscula
{
    if(props.nome)
    return <h1>Ola, {props.nome}!</h1>
    return <h1>Olá, Estranho!</h1>
}

function Conteudo(props){
    return (
        <div>
        <h2>Isso é um outro componente</h2>
        <p>
            Qualquer conteudo aqui
        </p>
        </div>
    )
}


//Normalmente criamos um componente para envolver todos os outros componentes, chamado App
function App(){
    return(
        <div>
        <BemVindo nome={'Fernando'}/>,
        <BemVindo/>,
        <Conteudo/>
    </div>
    )
}


ReactDOM.render(
    <App/>,  
    document.getElementById('root')
)
