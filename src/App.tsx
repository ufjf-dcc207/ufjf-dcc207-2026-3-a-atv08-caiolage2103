import './App.css';
import Pacote from './Pacote';
import type { PacoteType } from './types';


const data:Array<PacoteType> = [
  {
    id: "'785ff7bd-48b5-4c26-a926-0f41a6255460'",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  }
];

function App() {

  return (
    <section>
      <h2>Pacotes</h2> 
      <div className="pacotes">
      <Pacote pacote={data[0]}/>
      
    </div>
    </section>
  );
}

export default App;