import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import ProductContex from "./Components/ProductContex";
function App() {
  return (
    <>
      <ProductContex>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ProductContex>
    </>
  );
}

export default App;
