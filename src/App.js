import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>

    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<UserLogin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
