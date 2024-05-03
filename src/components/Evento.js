import Button from "./evento/Button";

function Evento() {
  function meuEvento() {
    console.log(`Ativando primeiro evento hoje`);
  }

  function segumdoEvento() {
    console.log(`Ativando segundo evento hoje`);
  }

  return (
    <div>
      <p>Clique para ativa o evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segumdoEvento} text="Segundo Evento" />
    </div>
  );
}

export default Evento;
