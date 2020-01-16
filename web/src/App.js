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

import React, { useState } from 'react';

import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor="username_github">Usuário do Github</label>
          <input name="github_username" id="username_github" />
        </form>
      </aside>
      <main>
      
      </main>
    </div>
  );
}

export default App;
