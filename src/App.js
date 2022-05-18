import "./App.css";
import Layout from "./components/layout/Layout";
import Shapping from "./containers/shapping/Shapping";
function App() {
  return (
    <div className="App">
      <Layout>
        <Shapping />
      </Layout>
    </div>
  );
}

export default App;
