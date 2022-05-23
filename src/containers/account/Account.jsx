import "./Account.css"
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Wrapper  from './../../hoc/Wrapper'
const Account = () => {
  return (
    <Wrapper>
      <div className="account">
        <h2>Account</h2>
    
      <form>
        <Input type='text'/>
        <Input type='text'  />
        <Input type='password'/>
        <Button btnType='form'>Register</Button>
      </form>
      </div>
    </Wrapper>
  );
};

export default Account;
