import React from 'react'

const JSXExemples = () => {
    {/* Entre a função e o retorno é uma area javascript que podemos declarar variaveis, funções, objetos e etc */}
    const userName = 'Fernando'
    const user = {
        name: userName,
        surname: 'Souza',
        age: 25,
        city: 'Belo Horizonte',
        country: 'Brasil',
        isLogged: true,
        isAdmin: false,
        skills: ['React', 'Node.js', 'MongoDB'],
        address: {
            street: 'Rua dos Bobos',
            number: 0,
        }
    }
    const users = [
        {id: 1, name: 'John', email: 'john@example.com'},
        {id: 2, name: 'Jane', email: 'jane@example.com'},
        {id: 3, name: 'Jim', email: 'jim@example.com'},
    ]
    function getGreeting(name){
        return `Olá ${name}! Seja bem vindo ao curso de ReactJS`
    }

    
  return (
    <div>
        <h2>O jsx é o html do react, mas é um javascript que é executado no navegador</h2>
        {/* Listando dados do usuario*/}
        {/* Podemos utilizar o js dentro do jsx com chaves, ou seja tudo que estiver entre chaves é javascript */}
        <p>O nome do usuario é {userName}</p>
        <p>A idade do usuario é {user.age} anos</p>
        <p>{getGreeting(userName)}</p>


        {/* Diferenças entre JSX e HTML*/}
        {/* 1 - Como Adicionar uma classe */}
        <div>
            <h3 className = "title">Como Adicionar uma classe</h3>
        </div>
        {/* 2 - Se precisar adicionar um atributo será em camelCase, ex:*/}
        <button onClick={()=>alert('Clicou no botão')}>Clique aqui</button>
        {/* 3 - O fechamento da tag é obrigatorio mesmo que seja uma tag sem fechamento*/}
        <input type="text" placeholder='Digite seu nome' />
        
        {/* Renderização condicional*/}
        <div>
            <p>
                {user.isLogged === true && 'Você está logado'}
                {user.isLogged === false && 'Você não está logado'}
            </p>
            
           {user.isAdmin?(
             <p>
                Voce é admin {user.name}
            </p> 
        ):( <p>
            {user.name}, você não é admin
            </p>
        )} 
        </div>

        {/* Renderização de lista
        utilizamos o map para percorrer o array*/}
        <div>
            {/* key é uma propriedade que é obrigatória para o react identificar qual elemento foi alterado, removido ou adicionado */}
            <ul>
               {users.map((user) => (
                
                <li key={user.id}>
                    {user.id} - 
                    {user.name} - {user.email}
                     
                </li>
               ))} 
            </ul>
        </div>
    </div>
  )
}

export default JSXExemples