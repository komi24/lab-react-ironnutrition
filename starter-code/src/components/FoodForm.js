import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class FoodForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayForm: false,
      name: '',
      image: '',
      calories: 0,
      quantity: 0,
    }
  }

  newFood() {
    this.props.handleNewFoodInApp(this.state)
    this.setState({displayForm: false})
  }
  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'calories' || name === 'quantity') {
      value = parseInt(value)
    } 
    this.setState({[name]: value});
  }

  render() {
    if (this.state.displayForm) {
      return (
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input 
                class="input" 
                type="text" 
                placeholder="Name"
                name="name"
                onChange={(e)=>{this.handleChange(e)}}/>
            </div>
          </div>
          <div class="field">
            <label class="label">Calories</label>
            <div class="control">
              <input 
                class="input" 
                type="number" 
                placeholder="Calories"
                name="calories"
                onChange={(e)=>{this.handleChange(e)}}/>
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input 
                class="input" 
                type="text" 
                placeholder="Image"
                name="image"
                onChange={(e)=>{this.handleChange(e)}}/>
            </div>
          </div>
          <div class="field">
            <label class="label">Quantity</label>
            <div class="control">
              <input 
                class="input" 
                type="number" 
                placeholder="0"
                name="quantity"
                onChange={(e)=>{this.handleChange(e)}}/>
            </div>
          </div>
          <button onClick={() => this.newFood()}> Valider</button>
        </form>
      );
    } else {
      return (
        <button onClick={() => this.setState({displayForm: true})}> Ajouter un plat</button>
        )
    }
  }
}

export default FoodForm;


