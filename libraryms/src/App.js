
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import  Navbartop  from './components/Navbartop';
import Loginpage from './components/StudentRegister';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     <Navbartop/>
     <Routes><Route path='/' element={<Homepage/>}/>
     <Route path='login' element={<Loginpage/>}/>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
