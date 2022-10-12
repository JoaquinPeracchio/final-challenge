import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layouts/Layout';
import Welcome from './pages/Welcome';
import ShowComments from './components/Comments/ShowComments';
import ProductsPage from './pages/ProductsPage'
import Profile from './pages/Profile';
import User from './pages/User'
import Carrito from './components/Carrito/Carrito'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/user' element={<User />} />
            <Route path='/signup' />
            <Route path='/signin' />
            <Route path='/cart' element={<Carrito/>} />
            {/* <Route path='/comments' element={<ShowComments />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;