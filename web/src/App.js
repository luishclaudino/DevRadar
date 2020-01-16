//Tudo do react é baseado nos seguintes conceitos:
//Componente: É uma função que retorna um bloco isolado de conteúdo HTML, CSS ou JS que não interfere no restante da aplicação. Bom para repetir trechos de código como vários botões.
//            Sempre que for criar um componente, crie um novo arquivo

//Propriedade: Informações que um componente PAI (function) envia para seu FILHO (dentro da function)
// import Header from './Header';
//<> </> -> Essa tag e seu fechamento é o Fragment -> uma tag sem nomenclatura boa pra colocar vários elementos sem muitos divs que podem quebrar a estilização.
// function App() {
//   return (
//     <>
//       <Header title='Dashboard' />
//       <Header title='Dashboard1' />
//       <Header title='Dashboard2' />
//     </>
//   );
// }


//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
// import React, { useState } from 'react';
// function App() {
//   const [counter, setCounter] = useState(0) ;
//   function incrementCounter(){
//     setCounter(counter + 1);
//   }

//   return (
//     <>
//       <h1>Contador: {counter}</h1>
//       <button onClick={incrementCounter}>Incrementar</button>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const[devs, setDevs] = useState([]);


  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]); /*Adiciona os devs antigos e coloca o recentemente adiciona no array */
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
