import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Error from './Components/Error';
// import UseStateHook from './Hook/UseState/UseStateHook';
// import Inc from './Hook/Increment/Inc';
import Header from './Common/Header';
import UseEffectExampl from './Hook/UseEffect/UseEffectExampl';
import UseEffectEx from './Hook/UseEffect/UseEffectEx';
// import Details from './Hook/UseEffect/Details/Details';
import Details from './Hook/EffectStateParams/Details';
import Img from './Hook/UseEffect/Details/Img';
import Githubx from './Hook/EffectStateParams/Githubx';
import Tester from './Components/Tester';
import ImageData from './Hook/EffectStateParams/Example2/ImageData';
import ImgDetails from './Hook/EffectStateParams/Example2/ImgDetails';
import ProductDetails from './Shopping/Pages/ProductDetails';
import Product from './Shopping/Pages/Product';
import Products from './Shopping/Pages/Products';
import Fulldetails from './Shopping/Pages/Fulldetails';
import Example from './Hook/UseReducer/Example'
import ContextState from './Hook/UseContext/Context/ContextState'
import AboutUser from './Hook/UseContext/AboutUser';
import Result from './Hook/UseContext/Result';
function App() {
  return (
    <>
      {/* <UseStateHook/> */}
      <ContextState>
        <Router>
          <Header />
          <Routes>
            <Route path="/about-context" element={<AboutUser />} />
            <Route path="/result-context" element={<Result />} />
            {/* <Route path="/reducer" element={<Example />} /> */}
            {/* <Route path='/' element={ <ProductDetails/>} /> */}
            {/* <Route path="/" element={<Products />} /> */}
            {/* <Route path="/details/:id" element={<Fulldetails />} /> */}
            {/* <Route path='/product' element={ <ProductDetails/>} /> */}
            {/* <Route path="/img" element={<ImageData/>} />
          <Route path="/img/details/:id" element={<ImgDetails/>} />
          <Route path='/' element={<Githubx/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/img/details/:id" element={<Img />} />
          <Route path ="/tester" element={<Tester/>}/> */}
            {/* <Route path="/" element={<UseEffectEx/>} />
          <Route path="/img" element={<UseEffectExampl/>} /> */}
            {/* // <Route path="/" element={<Inc/> }/> */}
            {/* <Route path="/card" element={<UseStateHook/>}/> */}
            {/* <Route path="/" element={<Home />} />
          // <Route path="/about/:id" element={<About />} />
          // <Route path="*" element={<Error />} /> */}
          </Routes>
        </Router>
      </ContextState>
    </>
  );
}

export default App;
