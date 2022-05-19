import Wrapper from './../../hoc/Wrapper';
import Modal from './../../components/UI/Modal/Modal';
import { useState } from 'react';
import Controls from '../../components/controls/Controls';
import Order from '../../components/Order/Order';
const prices = {
    product1: 59,
    product2: 30,
    product3: 88,
};
const Shapping = () => {
    const [productsState, setProductState] = useState({
        Products: {
            product1: 0,
            product2: 0,
            product3: 0,
        },
        totalPrice: 0,
        purchased: true,
    });
    const addProducthandler = (type) => {
        const prevCount = productsState.Products[type];
        const newCount = prevCount + 1;
        const listUpdate = {
            ...productsState.Products,
        };

        listUpdate[type] = newCount;

        const prevPrice = productsState.totalPrice;
        const newprice = prices[type];
        const UpdatePrice = prevPrice + newprice;

        setProductState({ totalPrice: UpdatePrice, Products: listUpdate });
    };

    const RemoveProduct = (type) => {
        const preveCount = productsState.Products[type];
        const newCount = preveCount - 1;
        const listUpdate = {
            ...productsState.Products,
        };
        listUpdate[type] = newCount;

        const preprice = prices[type];
        const SubPrice = productsState.totalPrice;
        const updatePrice = preprice - SubPrice;
        setProductState({ totalPrice: updatePrice, Products: listUpdate });
    };
    const purchasedHandler = () => {
       
        setProductState({ purchased: false });
    };
    return (
        <Wrapper>
            <div>
                <Modal show={productsState.purchased}>
        
                    <Order products={productsState.Products} />
                </Modal>
                <Controls
                    addProduct={addProducthandler}
                    removeProduct={RemoveProduct}
                    price={productsState.totalPrice}
                    order={purchasedHandler}
                />
            </div>
        </Wrapper>
    );
};

export default Shapping;
