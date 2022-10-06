import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layouts/Layout';
import Welcome from './pages/Welcome';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/signup' />
            <Route path='/signin' />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;