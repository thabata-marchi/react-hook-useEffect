import React from 'react';

const ExampleEffect1 = ({numberEffect}) => {
  return(
    <div className="col s12 m3">
    <div className="card">
      <div className="card-content">
        <h1> Exemplo 1 <br /> de Hook Effect </h1>
        <p> 
          Criei um state com o nome: <b>'numberEffect'</b> e declarei que ele tem valor inicial 0.
        </p>
        <p> 
          Na função de dentro do useEffect, declarei uma function setTimeout, que após 3s o valor é alterado para o mesmo valor 
          do state <b>'numberInitial'</b>, que tem como valor inicial: 1.
        </p>
        <p> 
          Atualize a tela e veja a mudança, assim que acessado a aplicação:<br /><br /> <b>numberEffect: {numberEffect}</b>.
        </p>
      </div>
    </div>
  </div>    
  )
}

export default ExampleEffect1;