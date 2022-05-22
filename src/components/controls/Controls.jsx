import "./Controls.css";
import Builder from "./Builder/Builder";
const Products = [
  { title: "product1", type: "product1" },
  { title: "product2", type: "product2" },
  { title: "product3", type: "product3" },
];
const Controls = (props) => {
  return (
    <div className="controls">
      <div className="price">
        <p>TotalPrice:{props.price}</p>
      </div>

      {Products.map((c) => {
        return (
          <Builder
            add={() => props.addProduct(c.type)}
            key={c.title}
            title={c.title}
            Remove={() => props.removeProduct(c.type)}
          />
        );
      })}
      <button className="orderBtn" onClick={props.order}>
        Order
      </button>
    </div>
  );
};

export default Controls;
