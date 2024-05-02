import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Fiat" ano_lancamento={1958} />
        <Item marca="Ford" ano_lancamento={1936} />
        <Item marca="Ferrari" ano_lancamento={1915} />
        <Item marca="Ferrari" />
      </ul>
    </>
  );
}

export default List;
