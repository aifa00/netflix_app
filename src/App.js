import './App.css';
import { useContext, useEffect } from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Link, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {authContext} from './store/AuthContext.jsx';



function App() {

  const {user, setUser} = useContext(authContext);
  useEffect(()=> {
    const AuthenticateUser = async () => {
      try {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          setUser(user); 
        })        
      } catch (error) {
        console.log(error.message);
      }
    }
    AuthenticateUser();
  })


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login'/> }/>
          <Route path='/login'  element={!user ? <Login /> : <Navigate to='/'/> }/>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App;