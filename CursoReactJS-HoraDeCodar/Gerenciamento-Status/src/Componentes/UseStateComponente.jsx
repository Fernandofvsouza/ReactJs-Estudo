//No react variaveis javascript nao sao reativas, ou seja, elas nao sao atualizadas automaticamente
//Para isso, utilizamos o useState, para criar uma variavel que vai ser atualizada automaticamente
//importamos o useState do react
//useState é um hook, ou seja, é uma função que retorna um array com duas posições

import {useState} from 'react';

const UseStateComponente = () => {
    //Criamos uma variavel de consulta que seria o count e uma variavel de atualização que seria o setCount
    const [count, setCount] = useState(0/*Dentro dos parenteses, colocamos o valor inicial da variavel*/);
    const increment = () => {
        setCount((prevCount)=>prevCount + 1);
        console.log();
    }
    const decrement = () =>{
        setCount((prevCount)=>prevCount - 1);
        console.log(count);
    }


 //Outro exemplo de useState, onde a variavel é um objeto
 const [user, setUser] = useState({
    name: 'John',
    age: 20,
    hobbies: ['Reading', 'Coding', 'Gaming']
 });

 const incrementAge = () =>{
    setUser((prevUser) =>(
        {
            ...prevUser,
            age: prevUser.age + 1,

        }
    ))
 }

 const decrementAge = () => {
    setUser((prevUser)=>(
        {
            ...prevUser,
            age: prevUser.age - 1,
        }
    ))
 }
  
  
  
    return (
    
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>


        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
        
        <button onClick={incrementAge}>Incrementar idade</button>
        <button onClick={decrementAge}>Decrementar idade</button>
    </div>
  );
};

export default UseStateComponente;