import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {
  const name = "Jofre";
  const idade = "55";
  const profissao = "Desenvolvedor";

  return (
    <div className="App">
      <Pessoa nome={name} idade={idade} profissao={profissao} />
      <List />
    </div>
  );
}

export default App;
