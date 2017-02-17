import React from 'react';
import ReactDom from 'react-dom/server';
import {
  match
}
from 'react-router';
import {
  Provider
}
from 'react-redux';
import {
  ReduxAsyncConnect,
  loadOnServer
}
from 'redux-connect';
import configureStore from '../../../client/redux/configureStore';
import renderHTML from './helpers/render_html';
import Routes from '../../../client/routes';

const reactModule = (req, res, next) => {
    const store = configureStore();

    const state = store.getState();
    
    // This setting is required for material-ui server-side rendering
    //state.theme.userAgent = req.headers['user-agent'];
    
    match({
      routes: Routes,
      location: req.url
    }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      }

      if (error) {
        return next({
          message: error.message,
          status: 500,
          success: false
        });
      }

      if (!renderProps) {
        return next();
      }

      loadOnServer({
        ...renderProps,
        store
      }).then(() => {
        const componentHTML = ReactDom.renderToString(
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );
        res.send(renderHTML(componentHTML, store.getState()));
      });
    });
};

export default reactModule;
