//exemplo de como funciona a renderização do react
//A CADA 1 SEGUNDO A RENDERIZAÇÃO DO RELOGIO É ATUALIZADA
//AO INVES DE ATUALIZAR A PAGINA, APENAS ATUALIZAMOS O  H2 DO RELOGIO!


function relogio(){
    const elemento = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>  
    );
    ReactDOM.render(
        elemento,
        document.getElementById('root')
    );
}

setInterval(relogio, 1000);