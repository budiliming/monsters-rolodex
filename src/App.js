import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Yihua Zhang',
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => console.log(this.state))
  }

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters' 
          // onChange={e => console.log(e.target.value)}
          // onChange={e => this.setState({ searchField: e.target.value })} //async
          handleChange={this.handleChange}
        />
        {/* <CardList monsters={this.state.monsters}> */}
        <CardList monsters={filteredMonsters}>  
          {/* Children   */}
        </CardList>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'Hello Andrei' })}>Change Text</button>
        </header> */}
      </div>
    );
  }
}

export default App;
