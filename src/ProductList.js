import React, { Component } from 'react';


import Product from './Product';
import Total from './Total';


class ProductList extends React.Component {

  showProduct = (name) =>{
    alert("You Selected " + name);
  }


  render() {
    return (
      <div>
        <Product name="Android" price={197} handleShow={this.showProduct}/>
        <Product name="iOS" price={230} handleShow={this.showProduct}/>
        <Product name="Windows" price={300} handleShow={this.showProduct}/>
        <Total/>
      </div>
    );
  }
}

export default ProductList;
