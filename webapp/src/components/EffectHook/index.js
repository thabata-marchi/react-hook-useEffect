import React, {useState, useEffect} from 'react';
import InfoEffect from '../InfoEffect';
import ExampleEffect1 from '../ExampleEffect1';
import ExampleEffect2 from '../ExampleEffect2';
import Conclusion from '../Conclusion';
import './effectHook.css';

const EffectHook = () => {
  const [ numberInitial, setNumber ] = useState(1);
  const [ numberEffect, setNumberEffect ] = useState(0);
  
  useEffect(() => { 
    setTimeout(() => {setNumberEffect( numberInitial )}, 3000);
  }, [numberInitial]);
  
  const functionSimple = () => {
    setNumber(numberInitial + 1)
  }

  return(
    <>
    <div className="row">
      <InfoEffect functionSimple={functionSimple} />
      <ExampleEffect1 numberInitial={numberInitial} />
      <ExampleEffect2 numberInitial={numberInitial} numberEffect={numberEffect} />
      <Conclusion />
    </div>
    </>
  )    
}
    
export default EffectHook;