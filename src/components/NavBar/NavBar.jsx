import React, {useContext} from 'react';
import './NavBar.css';
import { authContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar() {

  const {user} = useContext(authContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    const logoutUser = async () => {
      try {
        const auth  = getAuth();
        await signOut(auth);
        navigate('/login');
      } catch (error) {
        console.log(error.message);
      }
    }
    logoutUser();
  }
  

  return (
    <div className='navbar'>

        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix_logo" />
        <span className='user' onClick={handleLogout}>{user && 'Logout' }</span>
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />

    </div>
  )
}

export default NavBar