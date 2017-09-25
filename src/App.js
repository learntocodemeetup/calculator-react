import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    total: 0,
    currentNumber: 0
  }

  numberClick = (event) => {
      var total = this.state.total;

      this.setState({
        currentNumber: Number(event.target.textContent)
      });

      setTimeout(function() {
          this.setState({
            total: total + this.state.currentNumber  
          });
      }.bind(this), 10);


  }
  render() {
    return (
      <div className="App">
        <div className="numpad">
          
          <button className="clear">C</button>
          <button onClick = {this.numberClick}>1</button>
          <button onClick = {this.numberClick}>2</button>
          <button onClick = {this.numberClick}>3</button>
          <button onClick = {this.numberClick}>4</button>
          <button onClick = {this.numberClick}>5</button>
          <button onClick = {this.numberClick}>6</button>
          <button onClick = {this.numberClick}>7</button>
          <button onClick = {this.numberClick}>8</button>
          <button onClick = {this.numberClick}>9</button>
          <button onClick = {this.numberClick}>0</button>
          

          <button>=</button>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>

          <input className="total" type="text" value={"Total is " + this.state.total} />
          <p>Current number is {this.state.currentNumber}</p>
          
        </div>
      </div>
    );
  }
}

export default App;