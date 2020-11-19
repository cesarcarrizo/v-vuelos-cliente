import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App'
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path='/' component={Login} />
//       <Route path="/home" component={Home} />
//     </Switch>
//   </Router>
// )


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

