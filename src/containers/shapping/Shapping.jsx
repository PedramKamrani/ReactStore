import Wrapper from "./../../hoc/Wrapper";
import { useState } from "react";
const Shapping = () => {
  const productsState = useState({
    Products: [
      { product: "product1", count: 0 },
      { product: "product2", count: 0 },
      { product: "product3", count: 0 },
      { product: "product4 ", count: 0 },
    ],
    totalPrice: 0,
  });
  return (
    <Wrapper>
      <div>
        <p>contra</p>
      </div>
    </Wrapper>
  );
};

export default Shapping;
