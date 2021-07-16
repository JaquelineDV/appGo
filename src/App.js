import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import PropTypes from 'prop-types';
import history from "./services/history";

const App = () => {

  return (
    <Router history={history} >
        
      <Routes />
        
    </Router>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  globalState: PropTypes.object,
}


export default App;


/*



import React, { PureComponent } from "react";
import Routes from "./routes";

class App extends PureComponent {
  render() {
    console.log('seta load')
    return <Routes />;
  }
}

export default App;

*/
