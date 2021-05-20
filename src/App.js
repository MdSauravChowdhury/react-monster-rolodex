import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import './components/card-list/card-list.style.css';
import SearchBox from './components/search-box/search-box.component';
// import './App.css';


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robot => this.setState({ monster: robot }))
    
  }

  render() {

    // live filter data
    const {monster, searchField} = this.state;
    const filteredMonster = monster.filter(monster => monster.username.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div>
        <h1 className="hStyle">Monster Rolodex</h1>
         <SearchBox placeholder="placeholder" handelChange={e => { this.setState({ searchField: e.target.value }) }} />
        <CardList monster={filteredMonster}></CardList>
      </div>
    )
  }
}
