
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import  Navbartop  from './components/Navbartop';
import StudentRegister from './components/StudentRegister';
import { ToastContainer } from 'react-toastify';
import Loginpage from './components/Loginpage';
import BookviewAdmin from './components/BookviewAdmin';
import Addbook from './components/Addbook';

function App() {
  return (
    <div className="App">
     <Navbartop/>
     <Routes><Route path='/' element={<Homepage/>}/>
     <Route path='reg' element={<StudentRegister/>}/>
     <Route path='login' element={<Loginpage/>}/>
     <Route path='view' element={<BookviewAdmin/>}/>
     <Route path='add-book' element={<Addbook/> }/>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
