import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Jofre";
  const sobre = "Tomas";

  const img1 = "https://viaplaceholder.com/150";

  return (
    <div className="App">
      <h2> Alterando o JSX</h2>
      <p>
        Olá, {name} {sobre}
      </p>
      <img src={img1} alt="minha img" />
      <HelloWorld />
    </div>
  );
}

export default App;
