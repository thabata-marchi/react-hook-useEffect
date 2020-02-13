import React from 'react';
import useeffect from './useeffect.jpg';

const InfoEffect = ({ functionSimple }) => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={useeffect} alt="React Hook Effect" className="logo" />
          <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={functionSimple}>
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="card-content">
          <p>
            O <b>Hook Effect</b>, é uma função que é chamada depois da primeira renderização e roda depois de toda atualização.
          </p>
          <p>
            Ele é usado dentro do componente, pois, dessa forma, ele acessa o state ou
            qualquer outra prop.
          </p>
          <p>
            "Ao contrário dos ciclos de vida do React: <br />'componentDidMount' ou 'componentDidUpdate', efeitos agendados com useEffect não bloqueiam o navegador a atualizar a tela."
          </p>
          <p>
            Fonte: <a href="https://pt-br.reactjs.org/docs/hooks-effect.html" rel="noopener noreferrer" target="_blank" >Documentação do React</a>.
          </p>
        </div>
      </div>
    </div>

  )
}

export default InfoEffect;