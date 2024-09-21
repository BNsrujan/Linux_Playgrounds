
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { styles } from './style';
import { Nav, Profile, Terminals, Login, Register, ForgotPassword } from "./components";



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
            <Route path="/terminal/:os" element={<Terminals />} />
            {/* Add other routes or components for your homepage */}
          </Routes>
        </div>

        {/* <div className="relative bg-sky-50">
      <ConditionalNav />
      <Routes>
        <Route path="/login" element={<Login className="  flex justify-center items-center" />} />
        <Route path="/" element={<Cards className="bg-primary" />} />
        <Route path="/terminal/:os" element={<Terminals />} />
      </Routes>
>>>>>>> origin/main */}
      </div>
    </Router>
  );
};


const ConditionalNav = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Nav className="fixed z-10" /> : null;
};

export default App;
