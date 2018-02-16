import React, { Component } from 'react';


import Product from './Product';
import Total from './Total';


class ProductList extends React.Component {

  render() {
    return (
      <div>
        <Product name="Android" price={197}/>
        <Product name="iOS" price={230}/>
        <Product name="Windows" price={300}/>
        <Total/>
      </div>
    );
  }
}

export default ProductList;
