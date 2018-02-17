import React, { Component } from 'react';
import './App.css';

class Total extends React.Component {

  render() {
    return (
      <div className="Total">
        <h3>Total Cash: ${this.props.total}</h3>
      </div>
    );
  }

}


export default Total;
