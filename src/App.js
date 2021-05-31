import React, { Component } from 'react';
import {robots} from './robots';
import SearchBox from './SearchBox'
import CardArray from './CardArray';


class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:robots,
            searchfeild:''
        }
    }
   onSearchChange = (event) => {
       this.setState({searchfeild: event.target.value})
      
    //    console.log(filterValue)
   } 
  render(){  

    const filterValue = this.state.robots.filter( robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
    })

      return (
        <div className='tc'>
        <h1 style={{ fontFamily:'fantasy'}} > ROBOFRIENDS </h1>   
        <SearchBox SearchChange={this.onSearchChange}/> 
        <CardArray robots={filterValue}/>
        </div>

    );
}
}

export default App;