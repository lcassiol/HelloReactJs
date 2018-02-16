import React, { Component } from 'react';

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = { qty: 0 };
  }

  buy = () => {
    this.setState({qty : this.state.qty + 1});
  }

  render() {
    return (
      <div>
          <p>{this.props.name} - ${this.props.price}</p>
          <button onClick={this.buy}>Buy</button>
          <button onClick={this.show}>Show</button>
          <h3>Qty: {this.state.qty} item(s)</h3>
          <hr/>
      </div>
    );
  }
}


export default Product;
