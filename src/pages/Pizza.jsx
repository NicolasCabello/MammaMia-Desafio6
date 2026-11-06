import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
import { formatPrice } from "../utils/formatPrice";

const Pizza = () => {
  const { pizza } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);

  if (!pizza) {
    return null;
  }

  return (
    <main className="pizza-page">
      <section className="container my-4">
        <article className="card pizza-detail">
          <div className="row g-0">
            <div className="col-12 col-md-5">
              <img
                src={pizza.img}
                alt={`Pizza ${pizza.name}`}
                className="pizza-detail-img"
              />
            </div>
            <div className="col-12 col-md-7">
              <div className="card-body p-4">
                <h2 className="h4 text-capitalize border-bottom pb-3 mb-3">
                  Pizza {pizza.name}
                </h2>
                <p>{pizza.desc}</p>
                <p className="mb-2">Ingredientes:</p>
                <ul className="list-unstyled mb-3">
                  {pizza.ingredients.map((ingredient) => (
                    <li key={ingredient}>🍕 {ingredient}</li>
                  ))}
                </ul>
                <p className="fs-4 fw-bold mb-3">
                  Precio: ${formatPrice(pizza.price)}
                </p>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Pizza;
