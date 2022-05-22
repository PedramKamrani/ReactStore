import "./Navitems.css";
import Navitem from "./../NavItem/NavItem";
const NavItems = () => {
  return (
    <ul className="nav-items">
      <Navitem link="/">shapping</Navitem>
      <Navitem link="/account">Account</Navitem>
    </ul>
  );
};

export default NavItems;
