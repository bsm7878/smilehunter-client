import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Tv from './components/tv/Tv';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path = "/" component = {Main} />
        <Route path = "/intro" component = {Intro} />
        <Route path = "/tv" component = {Tv} />
        <Footer />
      </div>
    );
  }
}

export default App;