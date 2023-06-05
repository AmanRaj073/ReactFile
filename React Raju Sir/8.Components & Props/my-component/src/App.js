import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Props from './Components/Props/Props';

function App() {
  const student = [
    {
    name: "Jhon Doe",
    age: 34,
    city: "Mexico",
    zip: 123121,
    email:"jhon@mail.com",
  },
    {
    name: "Jolly",
    age: 24,
    city: "Kanazawa",
    zip: 23331,
    email:"jolly@mail.com",
  },
    {
    name: "Mital",
    age: 22,
    city: "Japan",
    zip: 44121,
    email:"mital@mail.com",
  },
    {
    name: "Tata",
    age: 50,
    city: "Mexico",
    zip: 123121,
    email:"tata@mail.com",
  }
  ]

  const mapData = student.map(x)
  const x = (item) => {
    return (item.name , item.email, item.city)
  }
  return (
    <>
      <Header/>
      {/* <Home /> */}
      {/* <About/> */}
      {/* <Login/> */}
      {/* <Footer/>  */}
      {/* <Props  head ="My Bio " sdata={student} /> */}
      <Props  head ="My Bio " sdata={mapData} />
    </>
  );
}

export default App;
