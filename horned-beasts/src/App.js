import React from 'react';

import './App.css';
import Header from './contant/Header';
import Main from './contant/Main';
import Footer from './contant/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

}

export default App;
