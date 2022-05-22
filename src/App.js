import "./App.css";
import Layout from "./components/layout/Layout";
import { Shapping } from "./containers/shapping/Shapping";
import Account from "./containers/account/Account";
import { BrowserRouter as Router , Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Shapping/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
