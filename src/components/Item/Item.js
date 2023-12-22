import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <article>
      <header>
        <h2 className="font-medium text-center">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          className="w-[300px] h-[350px] object-cover"
        />
      </picture>
      <section className="p-2">
        <p>Precio: ${price}</p>
      </section>
      <footer className="text-center ml-[30%] p-2 w-[40%] bg-[#cecef1] border ">
        <Link to={`/item/${id}`}>Mas Info</Link>
      </footer>
    </article>
  );
};

export default Item;
