import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import React, { Component } from 'react'
import TemporaryDrawer from './Drawer';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartArray:[],
      subtotal:0
    }
  }
  // Adding to cart
  addToCart=(event)=>{
    var id=event.target.id;
    var name=event.target.parentElement.parentElement.firstChild.firstChild.innerText;
    var price=event.target.parentElement.previousElementSibling.lastChild.innerText.substring(4);
    var arr={"id":id,"name":name,"price":price}

  // checking if item is already present or not
    const isFound=this.state.cartArray.some(value =>{
      if(value.id === id){
          return true
      }
      return false
    })

    // If item is already present
    if(isFound){
      this.setState({
        subtotal:this.state.subtotal + parseInt(price)
      })
    }

    // If not present
    else{
    this.setState({
      cartArray:[...this.state.cartArray,arr],
      subtotal:this.state.subtotal + parseInt(price),
      index: 1
    })
  }
  }

  // Deleting Items
  delete=(event)=>{
    let id=event.target.id;
    let price=event.target.parentElement.previousElementSibling.firstChild.firstChild.firstChild.innerText.substring(2);
    console.log(price)
      // eslint-disable-next-line
      this.state.cartArray = this.state.cartArray.filter((i)=> i.id !== id )
      this.setState({
        cartArray:this.state.cartArray,
        subtotal:this.state.subtotal - parseInt(price)
      }) 
  }

  checkout=()=>{
    if(this.state.subtotal > 0 ){
      alert("Thank You ! .. Order Has Been Placed");
      this.setState({
        cartArray:[],
        subtotal:0
      })
    }
    else{
      alert("Your Cart is empty !..Please select items");
    }
  }

  render() {
    return (
      <>
      <Navbar/>
      <Home add={this.addToCart}/>
      <TemporaryDrawer cartArray={this.state.cartArray} subtotal={this.state.subtotal} index={this.state.index} del={this.delete} checkout={this.checkout}/>
      </>
    );
  }
}
