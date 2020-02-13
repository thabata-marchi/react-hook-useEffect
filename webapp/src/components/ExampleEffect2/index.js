import React from 'react';

const ExampleEffect2 = ({numberInitial, numberEffect}) => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-content">
          <h2> Exemplo 2 de Hook Effect </h2>
          <p> Agora, ao clicar no botão de +, perceba que após 3s, o valor do state <b>'numberEffect'</b> também se altera!</p>
          <p>
            <b>numberInitial: {numberInitial} </b> <br />
            <b>numberEffect: {numberEffect} </b>
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h3> Exemplo 1 simples de incremento com useState() </h3>
          <p>Clique no + e veja o incremento acontecer aqui com useState: <b>numberInitial: {numberInitial} </b> </p>
        </div>
      </div>
    </div>
  )
}

export default ExampleEffect2;