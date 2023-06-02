import Card from "./layout/card";
import Random from "./components/random";
import "./App.css";
import Contador from "./components/contador";

function App() {
  return (
    <div className="App">
      <div className="cards">
        <Card titulo="Desafio Aleatório">
          <Random init={300} end={500} />
        </Card>
        <Card titulo="Contador">
          <Contador numeroInicial={10}></Contador>
        </Card>
      </div>
    </div>
  );
}

export default App;
