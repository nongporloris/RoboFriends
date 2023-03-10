import './App.css';
import React from 'react';
import CardList from './CardList';
import {robots} from './Robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';


class App extends React.Component {

  constructor(){
    super()
    this.state={
        robots: [],
        searchfield : ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots : users}));
  }


  onSearchChange = (event) => {

    this.setState({searchfield : event.target.value})
  }

  render() {

    const filterRobots = 
    this.state.robots.filter((user) => {
      return user.name.toLowerCase().includes(
        this.state.searchfield.toLowerCase())
    })

    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }
    else{

       return (

          <div className='tc'>
          <ErrorBoundary>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
              <CardList robots = {filterRobots}/>
            </Scroll>
          </ErrorBoundary>
          </div>
          

        )

    }

   

  }
}

export default App;