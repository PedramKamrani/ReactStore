import Wrapper from './../../hoc/Wrapper';
import Modal from './../../components/UI/Modal/Modal';
import Controls from '../../components/controls/Controls';
import Order from '../../components/Order/Order';
import { Component } from 'react';
const prices = {
    product1: 59,
    product2: 30,
    product3: 88,
};


class Shapping extends Component{
    state = {
        Products: {
            product1: 0,
            product2: 0,
            product3: 0,
        },
        totalPrice: 0,
        purchased: false,
    };

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
    purcherCountinue=()=>{
        console.log('countinue');
    }
    render() {
        return (
            <Wrapper>
                <div>
                    <Modal
                        show={this.state.purchased}
                        modalClose={this.PurcherBackHandler}
                    >
                        <Order
                         products={this.state.Products}
                         countinue={this.purcherCountinue}
                         cancel={this.PurcherBackHandler}
                         totalePrice={this.state.totalPrice}
                          />
                    </Modal>
                    <Controls
                        addProduct={this.addProducthandler}
                        removeProduct={this.RemoveProduct}
                        price={this.state.totalPrice}
                        order={this.purchasedHandler}
                    />
                </div>
            </Wrapper>
        );
    }
}
export default Shapping;
// const Shapping = () => {
//     const [productsState, setProductState] = useState({
//         Products: {
//             product1: 0,
//             product2: 0,
//             product3: 0,
//         },
//         totalPrice: 0,
//         purchased: false,
//     });
//     const addProducthandler = (type) => {
//         const prevCount = productsState.Products[type];
//         const newCount = prevCount + 1;
//         const listUpdate = {
//             ...productsState.Products,
//         };

//         listUpdate[type] = newCount;

//         const prevPrice = productsState.totalPrice;
//         const newprice = prices[type];
//         const UpdatePrice = prevPrice + newprice;

//         setProductState({ totalPrice: UpdatePrice, Products: listUpdate });
//     };

//     const RemoveProduct = (type) => {
//         const preveCount = productsState.Products[type];
//         const newCount = preveCount - 1;
//         const listUpdate = {
//             ...productsState.Products,
//         };
//         listUpdate[type] = newCount;

//         const preprice = prices[type];
//         const SubPrice = productsState.totalPrice;
//         const updatePrice = preprice - SubPrice;
//         setProductState({ totalPrice: updatePrice, Products: listUpdate });
//     };
//     const purchasedHandler = () => {

//         setProductState({ purchased: true });
//     };
//     const PurcherBackHandler=()=>{
//         setProductState({purchased:false})
//     }
//     return (
//         <Wrapper>
//             <div>
//                 <Modal show={productsState.purchased} modalClose={PurcherBackHandler}>

//                     <Order products={productsState.Products} />
//                 </Modal>
//                 <Controls
//                     addProduct={addProducthandler}
//                     removeProduct={RemoveProduct}
//                     price={productsState.totalPrice}
//                     order={purchasedHandler}
//                 />
//             </div>
//         </Wrapper>
//     );
// };

//export default Shapping;
