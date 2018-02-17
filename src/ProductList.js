import React, { Component } from 'react';


import Product from './Product';
import Total from './Total';


class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {total : 0 };
  }

  calculateTotal = (price) =>{
    this.setState({total : this.state.total + price})
  }

  showProduct = (name) =>{
    alert("You Selected " + name);
  }

  render() {
    return (
      <div>
        <Product name="Android" price={197} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Product name="iOS" price={230} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Product name="Windows" price={300} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Total total={this.state.total}/>
      </div>
    );
  }
}

export default ProductList;
