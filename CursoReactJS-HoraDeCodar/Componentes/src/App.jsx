//Importação de componentes
//Componente Pai
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importação de componentes filhos
import FunctionalComponent from './Componentes/FunctionalComponent'
import PropsExample from './Componentes/PropsExample'

function App() {
  
  return (
    <>
     <h1>Hello World</h1>
     {/* Chamando o componente filho */}
     <FunctionalComponent />
     {/* Passando props para o componente filho
     Quando o dado é um number utilizamos chaves para passar o valor
      */}
     <PropsExample nome="Fernando" idade={20} />
    </>
  )
}

export default App

//O ciclo do react: eu crio a função, eu retorno um objeto com jsx, eu exporto a função, eu importo a função no componente pai, e eu utilizo no jsx do componente pai