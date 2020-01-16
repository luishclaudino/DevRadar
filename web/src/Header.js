import React from 'react'; // sempre que tiver um código html tem que importar esse cabeçalho

function Header(props){
    return <h1>{props.title}</h1> //No HTML quando for introduzir conteudo JS tem que colocar chaves
}

export default Header;