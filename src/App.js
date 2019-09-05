import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Containers/Login/Login';


function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
