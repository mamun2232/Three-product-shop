import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Ring from './component/Ring/Ring';
import Book from './component/Book/Book'
import Tshart from './component/Tshart/Tshart';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import OrderConfrom from './component/OrderConfrom/OrderConfrom';
import RequireAuth from './component/RequireAuth/RequireAuth';

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
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/orderConfirm' element={<RequireAuth>
         <OrderConfrom></OrderConfrom>
       </RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
