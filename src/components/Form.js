import { useState } from "react";

function Form() {
  function cadastraUsuario(event) {
    event.preventDefault();

    console.log(`Usuário ${name} foi cadastrado com a senha ${password}.`);
  }

  const [name, setName] = useState();

  const [password, setPassword] = useState();

  return (
    <div>
      <form onSubmit={cadastraUsuario}>
        <div>
          <label htmlFor="name">Login:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digiti seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digiti sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastra" />
        </div>
      </form>
    </div>
  );
}

export default Form;
