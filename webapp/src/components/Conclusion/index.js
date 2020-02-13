import React from 'react';
import codeEffect from './codeeffect.jpg';

const Conclusion = () => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-content">
          <h3> Conclusão </h3>
          <p>
            O Hook Effect foi chamado após a primeira renderização, ou seja, inicialmente o valor de <b>'numberEffect'</b> é 0
          e o valor de <b>'numberInitial'</b> é 1. Após alguns segundos é possível ver esta mudança ocorrer, onde é setado
          o valor de <b>'numberEffect'</b> para o valor de <b>'numberInitial'</b>. A espera ocorre devido a função <b>'setTimeout'</b>,
            que foi utilizada para conseguirmos perceber está mudança que ocorre entre uma função comum e o Hook Effect.
            Conforme na documentação: "efeitos agendados com useEffect não bloqueiam o navegador a atualizar a tela", dessa forma,
          as mudanças ocorrem imperceptivelmente, por isso, foi necessário utilizar o <b>'setTimeout'</b> para percebemos esta mudança ocorrer.
        </p>

          <p>Veja o código: </p>
          <img src={codeEffect} alt="React Hook Effect" className="code" />
        </div>
      </div>
    </div>
  )
}

export default Conclusion;