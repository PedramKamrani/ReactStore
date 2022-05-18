
import Wrapper from './../../hoc/Wrapper';
import './Layout.css';
const Layout = (props) => {
    return ( 
        <Wrapper>
            <div>Navigation</div>
            <main className='container'>{props.children}</main>
        </Wrapper>
     );
}
 
export default Layout;