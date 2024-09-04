import React from 'react';
import { Nav, Profile } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotPassword';
import { styles } from './style';

const App = () => {
  return (
    <Router>
      <div className='relative bg-white'>
        <Nav className="fixed z-10" />
        <div className={`${styles.paddingX} mt-16`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Profile className="bg-primary" />} />
            {/* Add other routes or components for your homepage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
