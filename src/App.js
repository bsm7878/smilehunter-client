import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import TvPage from './pages/TvPage';
import IntroPage from './pages/IntroPage';
import IndexPage from './pages/IndexPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path = "/" component = {IndexPage} />
        <Route path = "/intro" component = {IntroPage}/>
        <Route path = "/tv" component = {TvPage}/>
        <Footer />
      </div>
    );
  }
}

export default App;