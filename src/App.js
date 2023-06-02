import Card from "./layout/card";
import Random from "./components/random";
import "./App.css";
import Ass from "./components/family";

function App() {
  return (
    <div className="App">
      <div className="cards">
        <Card titulo="Desafio Aleatório">
          <Random init={300} end={500} />
        </Card>
        <Card titulo="Desafio Aleatório" color="#900">
          <Random init={10} end={15} />
        </Card>
        <Card titulo="Desafio Aleatório" color="#080">
          <Random init={1} end={100} />
        </Card>
        <Card titulo="Por" color="#000">
          <Ass nome="Yasmin" sobrenome="Devegili"></Ass>
        </Card>
      </div>
    </div>
  );
}

export default App;
