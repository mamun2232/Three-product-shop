import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Ring from './component/Ring/Ring';
import Book from './component/Book/Book'
import Tshart from './component/Tshart/Tshart';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="bg-light">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Ring></Ring>}></Route>
       <Route path='/ring' element={<Ring></Ring>}></Route>
       <Route path='/book' element={<Book></Book>}></Route>
       <Route path='/tshart' element={<Tshart></Tshart>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
