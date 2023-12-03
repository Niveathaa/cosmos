import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import ProductDetail from './components/product/ProductDetail';
function App() {
  return (
    <Router>
    <div className="App">
     <HelmetProvider>
          <Header/>
          <div className="container container-fluid">

         
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/product/:id' element={<ProductDetail/>}/>


              </Routes>
              </div>
          <Footer/>
     </HelmetProvider>

    </div>
    </Router>
  );
}

export default App;
