import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContext from './store/AuthContext.jsx';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>

);


