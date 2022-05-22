import "./App.css";
import Layout from "./components/layout/Layout";
import { Shapping } from "./containers/shapping/Shapping";
import Account from "./containers/account/Account";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route  path="/" Component={Shapping}/>
          <Route path="/account" Component={Account}/>
     
        </Layout>
      </Router>
    </div>
  );
}

export default App;
