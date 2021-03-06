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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import CustomizeUser from './Pages/Dashboard/CustomizeUser';
import Admin from './Pages/Dashboard/Admin';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './firebase.init';
import AllUsers from './Pages/Dashboard/AllUsers';
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Dashboard/Payment';
import AdminCheckOrder from './Pages/Dashboard/AdminCheckOrder';

function App() {
  // const [user] = useAuthState(auth);
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

        <Route path='/dasboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route path='order' element={<MyOrder></MyOrder>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route index  element={<MyProfile></MyProfile>}></Route>
          <Route path='admin' element={<Admin></Admin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
          <Route path='user' element={<CustomizeUser></CustomizeUser>}></Route>
          <Route path='allorder' element={<AdminCheckOrder></AdminCheckOrder>}></Route>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
