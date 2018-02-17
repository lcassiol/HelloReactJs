import React, { Component } from 'react';


import ProductForm from './ProductForm';
import Product from './Product';
import Total from './Total';


class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total : 0,
      productList : [ {name: "Android", price: 197},  {name: "iOS", price: 230},  {name: "Windows", price: 300}  ]
    };
  }

  createProduct = (product) =>{
    this.setState({ productList: this.state.productList.concat(product)});
  }

  calculateTotal = (price) =>{
    this.setState({total : this.state.total + price})
  }

  showProduct = (name) =>{
    alert("You Selected " + name);
  }

  render() {
    var component = this;
    var products = this.state.productList.map(function functionName(product) {
        return (
            <Product name={product.name} price={product.price}
              handleShow={component.showProduct}
              handleTotal={component.calculateTotal}/>
        );
    });

    return (
      <div>
        <ProductForm handleCreate={this.createProduct}/>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
}

export default ProductList;
