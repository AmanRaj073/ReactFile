import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Menu } from './Pages/Menu';
import { Navbar } from './Common/Navbar';
import { Footer } from './Common/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
