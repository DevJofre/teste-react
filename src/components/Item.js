import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.propType = {
  marca: PropTypes.string,
  ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
  marca: "Falto cadastra nome da Marca",
  ano_lancamento: 0,
};

export default Item;
