import React from 'react';
import Titulo from './Titulo';
//import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';

let n = prompt("Digite um numero","5");
 
function App() {
  return (
    <div>
      
      <Tabuada numero = {n}/>
    </div>
  );
}

export default App;