function Form() {
  function cadastraUsuario(event) {
    event.preventDefault();
    console.log("Cadastrou o Usuarios!");
  }

  return (
    <div>
      <form onSubmit={cadastraUsuario}>
        <div>
          <input type="text" placeholder="Digiti seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastra" />
        </div>
      </form>
    </div>
  );
}

export default Form;
