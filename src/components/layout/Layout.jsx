
import Navbar from '../Navigation/Navbar';
import Wrapper from './../../hoc/Wrapper';
import './Layout.css';
const Layout = (props) => {
    return ( 
        <Wrapper>
           <Navbar/>
            <main className='container'>{props.children}</main>
        </Wrapper>
     )
}
 
export default Layout;