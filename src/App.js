import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/BLogs/Blogs';
import CheckAndOrder from './Pages/Home/CheckAndOrder';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';
import Tools from './Pages/Tools/Tools';

function App() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/tool/:idOftool' element={
        <RequireAuth>
          <CheckAndOrder></CheckAndOrder>
        </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
