import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ContentList from './components/content/ContentList';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <ContentList />
      </div>
    );
  }
}

export default App;