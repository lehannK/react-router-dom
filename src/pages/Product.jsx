import { Link, useParams } from "react-router-dom";
import products from "../database.json";

export default () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === +productId);
  console.log(typeof productId);

  if (!product) {
    return <h2>Ops... esse produtos não foi encontrado </h2>;
  }

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <h2
        style={{
          fontSize: "18px",
          maxWidth: "30rem",
          textAlign: "justify",
          fontWeight: 100,
          lineHeight: 1.4,
        }}
      >
        {product.description}
      </h2>
      <h2>R$ {product.price}</h2>
      <button>Comprar</button>
    </section>
  );
};
