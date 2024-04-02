import './Signup.css';
// import Logo from '../../olx-logo.png';
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { db } from '../../firebase/config';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



function Signup() {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [commonError, setCommonError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {

    e.preventDefault();

    if (userName.trim() !== '' && email.trim() !== '' && 
    password.trim() !== '' && !userNameError && !emailError && !passwordError)  {


      const createUser = async () => {
        try {
          setLoading('loading...')
          const auth = getAuth();
  
          const userCredentials = await createUserWithEmailAndPassword(auth, email.trim(), password.trim());
        
          await updateProfile(auth.currentUser, {
            displayName: userName
          });         
            
          setLoading('');
  
          navigate('/login');
  
        } catch (error) {
          setCommonError(error.message.replace('Firebase: ', ''));
          setLoading('');
          console.log(error.message);
        }
      }
  
      createUser();


    } else {


      if (!userName) {
        setUserNameError ('This field is required');
      } 
      if (!email) {
        setEmailError ('This field is required');     
      }      
      if (!password) {
        setPasswordError ('This field is required');
      }

    }
    
  }



  return (
    <div className='body'>
      <div className="loginParentDiv">

        <form onSubmit={handleSubmit}>

        <label htmlFor="fname">Username</label>
          <br />
          <div style={{display:'flex', flexDirection: 'column',alignItems:'start'}}>

          <input
            className="input"
            type="text"        
            name="name"
            value={userName}
            onChange={(e) => {
                setUserName(e.target.value);
                if (e.target.value === '') {
                  setUserNameError('This field is required')
                } else {
                  setUserNameError('');
                }
              }}
          />          
          {userNameError && <span className='error'>{userNameError}</span>}


          </div>        
          <br />


          <label htmlFor="fname">Email</label>
          <br />
          <div style={{display:'flex', flexDirection: 'column',alignItems:'start'}}>

          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

              if (e.target.value === '') {
                setEmailError('This field is required')
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                setEmailError('Enter a valid email')
              } else {
                setEmailError('');
              }
            }}
          />          
          {emailError && <span className='error'>{emailError}</span>}

          </div>        
          <br />

          <label htmlFor="lname">Password</label>
          <br />
          <div style={{display:'flex', flexDirection: 'column',alignItems:'start'}}>
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);

              if (!e.target.value) {
                setPasswordError('This filed is required');
              } else if (password.length < 6) {
                setPasswordError('Password must be 6 characters long');
              } else {
                setPasswordError('');
              }      
            }}
          />          
          {passwordError && <span className='error'>{passwordError}</span>}
          </div>
          <br /><br/>
          {loading ? <span className='loading'>{loading}</span> : <button>Signup</button>}
          {commonError && <span className='error'>{commonError}</span>}
        </form>
        <Link to='/login'><span>Login</span></Link>
      </div>
    </div>
  );
}

export default Signup;
