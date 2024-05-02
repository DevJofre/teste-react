function Evento() {
  function meuEvento() {
    console.log("Fui Ativado!");
  }

  return (
    <div>
      <p>Clique para ativa o evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  );
}

export default Evento;
