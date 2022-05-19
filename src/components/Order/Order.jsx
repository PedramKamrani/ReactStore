import Wrapper from '../../hoc/Wrapper';
const Order = (props) => {
    let summry=[]
    if(props.products){
         summry = Object.keys(props.products).map((item) => {
            return (
                <li key={item}>
                    {item}:{props.products[item]}
                </li>
            )
        })
    }
    
    return (
        <Wrapper>
            <h3>Orders</h3>
            <ul>{summry}</ul>
        </Wrapper>
    );
};
export default Order;
