import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {listFoods: foods, searchText: ''}
  }
  addNewFood (food) {
    this.state.listFoods.push(food)
    this.setState({listFoods: this.state.listFoods})
  }
  addQuantity (name) {
    this.state.listFoods.forEach(food => {
      if (food.name === name)
        food.quantity ++
    })
    this.setState({listFoods: this.state.listFoods})
  }
  searchFilter (food) {
    return food.name.includes(this.state.searchText)
  }
  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(e)=>this.setState({searchText: e.target.value})}
          placeholder="Search Text"
        />
        <FoodForm handleNewFoodInApp={(food) => this.addNewFood(food)}></FoodForm>
        { this.state.listFoods.filter(this.searchFilter.bind(this)).map(food => {
          return (
              <FoodBox 
                key={food.name}
                name={food.name} 
                quantity={food.quantity} 
                image={food.image} 
                calories={food.calories}
                addQuantity={this.addQuantity.bind(this)}
              ></FoodBox>
            );
        })
        }
      </div>
    );
  }
}

export default App;
