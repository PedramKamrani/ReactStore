import Wrapper from "./../../hoc/Wrapper";
import Modal from "./../../components/UI/Modal/Modal";
import Controls from "../../components/controls/Controls";
import Order from "../../components/Order/Order";
import { Component } from "react";
import Loader from "../../components/UI/Loader/Loader";
import axios from "./../../axios-order";
import { useLocation, useNavigate } from "react-router-dom";

const prices = {
  product1: 59,
  product2: 30,
  product3: 88,
};

class _Shapping extends Component {
  state = {
    Products: null,
    totalPrice: 0,
    purchased: false,
    loading: false,
  };
  componentDidMount() {
    axios
      .get("https://pedram-c9ce9-default-rtdb.firebaseio.com/products.json")
      .then((respose) => {
        this.setState({ Products: respose.data });
      })
      .catch((error) => {
        console.log("error data fetch");
      });
  }
  addProducthandler = (type) => {
    const prevCount = this.state.Products[type];
    const newCount = prevCount + 1;
    const listUpdate = {
      ...this.state.Products,
    };

    listUpdate[type] = newCount;

    const prevPrice = this.state.totalPrice;
    const newprice = prices[type];
    const UpdatePrice = prevPrice + newprice;

    this.setState({ totalPrice: UpdatePrice, Products: listUpdate });
  };

  RemoveProduct = (type) => {
    const preveCount = this.state.Products[type];
    const newCount = preveCount - 1;
    const listUpdate = {
      ...this.state.Products,
    };
    listUpdate[type] = newCount;

    const preprice = prices[type];
    const SubPrice = this.state.totalPrice;
    const updatePrice = preprice - SubPrice;
    this.setState({ totalPrice: updatePrice, Products: listUpdate });
  };
  purchasedHandler = () => {
    this.setState({ purchased: true });
  };
  PurcherBackHandler = () => {
    this.setState({ purchased: false });
  };
  purcherCountinue = () => {

    this.props.navigate('/account')
    //this.props.history.push('/account')
    // this.setState({ loading: true });
    // const order = {
    //   products: this.state.Products,
    //   totalPrice: this.state.totalPrice,
    //   customer: {
    //     name: "pedram",
    //     code: 123,
    //   },
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     this.setState({ loading: true, purchased: false });
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };
  render() {
    let order = null;

    if (this.state.loading) {
      order = <Loader />;
    }
    let controls = <Loader />;

    if (this.state.Products) {
      controls = (
        <Controls
          addProduct={this.addProducthandler}
          removeProduct={this.RemoveProduct}
          price={this.state.totalPrice}
          order={this.purchasedHandler}
        />
      );

      order = (
        <Order
          products={this.state.Products}
          countinue={this.purcherCountinue}
          cancel={this.PurcherBackHandler}
          totalePrice={this.state.totalPrice}
        />
      );
    }
    return (
      <Wrapper>
        <div>
          <Modal
            show={this.state.purchased}
            modalClose={this.PurcherBackHandler}
          >
            {order}
          </Modal>
          {controls}
        </div>
      </Wrapper>
    );
  }
}
export const Shapping = () => {
  let location = useLocation();
  let navigate = useNavigate();

  return <_Shapping location={location} navigate={navigate} />;
};
// export const ShappingFn = () => {
//   const [productsState, setProductState] = useState({
//     Products: {
//       product1: 0,
//       product2: 0,
//       product3: 0,
//     },
//     totalPrice: 0,
//     purchased: false,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const addProducthandler = (type) => {
//     const prevCount = productsState.Products[type];
//     const newCount = prevCount + 1;
//     const listUpdate = {
//       ...productsState.Products,
//     };

//     listUpdate[type] = newCount;

//     const prevPrice = productsState.totalPrice;
//     const newprice = prices[type];
//     const UpdatePrice = prevPrice + newprice;

//     setProductState({ totalPrice: UpdatePrice, Products: listUpdate });
//   };

//   const RemoveProduct = (type) => {
//     const preveCount = productsState.Products[type];
//     const newCount = preveCount - 1;
//     const listUpdate = {
//       ...productsState.Products,
//     };
//     listUpdate[type] = newCount;

//     const preprice = prices[type];
//     const SubPrice = productsState.totalPrice;
//     const updatePrice = preprice - SubPrice;
//     setProductState({ totalPrice: updatePrice, Products: listUpdate });
//   };
//   const purchasedHandler = () => {
//     setShowModal(true);
//   };
//   const PurcherBackHandler = () => {
//     setShowModal(false);
//   };
//   return (
//     <Wrapper>
//       <div>
//         <Modal show={showModal} modalClose={PurcherBackHandler}>
//           <Order
//             products={productsState.Products}
//             cancel={PurcherBackHandler}
//             countinue={PurcherBackHandler}
//           />
//         </Modal>
//         <Controls
//           addProduct={addProducthandler}
//           removeProduct={RemoveProduct}
//           price={productsState.totalPrice}
//           order={purchasedHandler}
//         />
//       </div>
//     </Wrapper>
//   );
// };
