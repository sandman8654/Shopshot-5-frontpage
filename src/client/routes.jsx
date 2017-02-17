import React                        from 'react';
import {
  IndexRoute,
  Router,
  Route,
  browserHistory
}                                   from 'react-router';
import { ReduxAsyncConnect }        from 'redux-connect';
import App                          from './components/App';


const Routes = (
  <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
);

export default Routes;
