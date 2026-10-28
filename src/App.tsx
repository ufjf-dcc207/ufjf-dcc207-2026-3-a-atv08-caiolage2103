import './App.css';
import Pacote from './Pacote';
import type { PacoteType } from './types';


const data:Array<PacoteType> = [
  {
    id: '785ff7bd-48b5-4c26-a926-0f41a6255460',
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34,
  },
  {
     id: '9bbdf2a6-d5f2-4217-826c-d53d2a7a3d46',
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 3.14
  }
];

function App() {

  return (
    <section>
      <h2>Pacotes</h2> 
      <div className="pacotes">
      {data.map(p => <Pacote pacote={p} key={p.id}
      />)}

    </div>
    </section>
  );
}

export default App;