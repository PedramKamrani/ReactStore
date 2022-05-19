import Wrapper from '../../hoc/Wrapper';
import Button from '../UI/Button/Button';
const Order = (props) => {
    let summry = [];
    if (props.products) {
        summry = Object.keys(props.products).map((item) => {
            return (
                <li key={item}>
                    {item}:{props.products[item]}
                </li>
            );
        });
    }

    return (
        <Wrapper>
            <h3>Orders</h3>
            <ul>{summry}</ul>
<p>Total Price:<span>{props.totalePrice}</span></p>
            <p>Continue?</p>

            <Button btnType="success" click={props.countinue}>
                Yes
            </Button>
            <Button btnType="danger" click={props.cancel}>
                No
            </Button>
        </Wrapper>
    );
};
export default Order;
