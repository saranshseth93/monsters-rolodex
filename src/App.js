import React, {Component} from 'react';
import './App.css';

import { CardList } from './components/cardlist/cardlist-component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
      ],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://monsters.free.beeceptor.com/monsters')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
  }

render() {
  const { monsters,searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox
      placeholder='Search Monsters'
      handleChange={e => this.setState({searchField:e.target.value})} 
    />
    <CardList monsters = {filteredMonsters}></CardList>
  </div>
  );
}
}

export default App;
