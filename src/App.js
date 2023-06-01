import Card from "./layout/card";
import Random from "./components/random";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card titulo="Desafio Aleatório">
        <Random init={300} end={500} />
      </Card>
    </div>
  );
}

export default App;
