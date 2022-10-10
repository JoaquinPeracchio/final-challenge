import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layouts/Layout';
import Welcome from './pages/Welcome';
import ShowComments from './components/Comments/ShowComments';
import Carrito from './components/Carrito/Carrito'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Welcome />} />
            {/* <Route path='/comments' element={<ShowComments />} />
            <Route path='/carrito' element={<Carrito />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;