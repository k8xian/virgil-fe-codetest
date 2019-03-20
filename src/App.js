import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import Page from './Components/Page';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);
library.add(faCaretDown);

class App extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle/>
        <Page/>
      </div>
    );
  }
}

export default App;
