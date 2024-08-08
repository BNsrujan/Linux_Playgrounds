import React from 'react';
import { Nav, Profile } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import { styles } from './style';

const App = () => {
  return (
    <Router>
      <div className='relative bg-white'>
        <Nav className="fixed z-10" />
        <div className={`${styles.paddingX} mt-16`}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact>
              <Profile className="bg-primary" />
              {/* Add other routes or components for your homepage */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
