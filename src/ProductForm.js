import React, { Component } from 'react';
import './App.css';

class ProductForm extends React.Component {

    submit = (e) =>{
      e.preventDefault();

      if(!this.refs.name.value  || !this.refs.price.value)
          return;

      var product = {
          name : this.refs.name.value,
          price: parseInt(this.refs.price.value)
      }

      this.props.handleCreate(product);

      this.refs.name.value = "";
      this.refs.price.value = "";
    }

    render() {
      return (
          <form className="ProductForm-form" onSubmit={this.submit}>
            <input type="text" placeholder="Product Name" ref="name" />
            <input type="text" placeholder="Product Price" ref="price" />
            <br/><br/>
            <button>Create Product</button>
          </form>
      );
    }
}


export default ProductForm;
