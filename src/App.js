
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Sidenavbar from './componebt/Sidenavbar';
import Home from './pages/Home';
import Setting from './pages/Setting';
import About from './pages/About';
import Navbar from './componebt/Navbar';
import Analystic from './pages/Analystic';
import Product from './pages/Product';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Navbar/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/anylastis' element={<Analystic/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
