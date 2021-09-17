import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Container/Container';
import Footer from './Container/Footer';
import Home from './Container/Home';
// import CustomerProduct from './Container/CustomerProduct';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container><Home></Home></Container>
      
     
      <Footer></Footer>

     
  
    </div>
    </BrowserRouter>
  );
}

export default App;
