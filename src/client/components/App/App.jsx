import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500, blue700, blue100} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Menu from '../Menu';
import Frontpage from '../Frontpage';
import Footer from '../Footer';

const propTypes = {
  dispatch: PropTypes.func,
  userAgent: PropTypes.string,
  children: PropTypes.node,
};

injectTapEventPlugin();

class App extends Component {
  
  constructor(props) {
    super(props);
  }
  
render() {
  
  const muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100
      }
    }, {
      avatar: {
        borderColor: null
      },
      userAgent: this.props.userAgent
    });

    const Main= {
      paddingBottom: '160px' // footer height size + 60px
    }
 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <Menu/>
          </div>
          <div style={Main}>
            <Frontpage/>
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
  
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    userAgent: state.userAgent
  };
}

export default connect(mapStateToProps)(App);
