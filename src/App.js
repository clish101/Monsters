import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/card-list/card-list.components';
import { Search } from './Components/Search-box/Search-box.component';
import { Button, Row, Col } from 'react-bootstrap'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:
        [

        ],
      searchField: ''

    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handlechange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { monsters, searchField } = this.state

    const filteredUsers = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search Placeholder="search monsters" Handlechange={this.handlechange} />
        <CardList monsters={filteredUsers} />

      </div>
    )
  }
}

export default App;
