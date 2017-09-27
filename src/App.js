import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // state = {
  //   total: 0,
  //   currentNumber: 0,
  //   calculationType: ''

  //   previousNumber: 0,
  //   currentNumber: 0
  // }

  // setCalculationType = (event) => {
  //   let calculationType;

  //   switch (event.target.textContent) {
  //     case '+':
  //       calculationType = 'plus';
  //       break;
  //     case '-':
  //       calculationType = 'minus';
  //       break;
  //     case '*':
  //       calculationType = 'multiply';
  //       break;
  //     case '/':
  //       calculationType = 'divide';
  //       break;
  //     default:
  //       calculationType = '';
  //   }

  //   this.setState({
  //     calculationType: calculationType
  //   });

  // }

  // numberClick = (event) => {

  //     this.setState({
  //       currentNumber: Number(event.target.textContent)
  //     });

  //     var total = this.state.total;

  //     if (this.state.calculationType === '') {
  //       return;
  //     }

  //     if (this.state.calculationType === 'plus') {
  //       this.setState({
  //         total: this.state.total + this.state.currentNumber
  //       })
  //       this.cal
  //       return;
        
  //     } else if (this.state.calculationType === 'minus') {
  //       this.setState({
  //         total: this.state.total - this.state.currentNumber
  //       })
  //       return;
        
  //     } else if (this.state.calculationType === 'multiply') {
  //       this.setState({
  //         total: this.state.total * this.state.currentNumber
  //       })
  //       return;
  //     } else if (this.state.calculationType === 'divide') {
  //       this.setState({
  //         total: this.state.total / this.state.currentNumber
  //       })
  //       return;
  //     }

  // }

  // calculate = () => {
  //   this.setState({
  //     total: this.state.total + this.state.currentNumber  
  //   });
  // }

  // clearClick = () => {
  //   this.setState({
  //     total: 0,
  //   })
  // }

  state = {
    total: 0,
    display: '0', // add zero later perhaps
    currentNumber: 0,
    calculationType: ''
  };

  plus = () => {

    let currentNumber = Number(this.state.display);
    this.setState({
      currentNumber: currentNumber,
      total: this.state.total + currentNumber,
      calculationType: 'plus'
    })
  }

  numberClick = (event) => {

    // if (this.state.calculationType === 'plus') {
    //   this.setState({
    //     display: ''
    //   })
    // }

    console.log("Event before setTimeout", event);

    if (this.state.display.length === 1 && this.state.display === '0' ) {
      this.setState({
        display: ''
      })
    }

    event.persist()

    setTimeout(() => {
      let currentNumber = Number(event.target.textContent);
      let display = this.state.display + event.target.textContent;
      this.setState({
        currentNumber: currentNumber,
        display: display
      });

    }, 10);
    setTimeout(() => {
      if (this.state.calculationType === 'plus') {
        let total = this.state.total + this.state.currentNumber;
        this.setState({
          total: total,
          calculationType: 'none',
          display: total
        })
      }
    }, 20);
    
    
  }

  clearClick = () => {
    this.setState({
      display: '0',
      currentNumber: 0,
      total: 0
    })
  }

  render() {
    console.log("Current number:", this.state.currentNumber);
    console.log("Display:", this.state.display );
    console.log("Total:", this.state.total);
    console.log("");
    return (
      <div className="App">
        <div className="numpad">
          
          <button onClick = {this.clearClick} className="clear">C</button>
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
          <button onClick={this.plus}>+</button>
          <button onClick={this.setCalculationType}>-</button>
          <button onClick={this.setCalculationType}>*</button>
          <button onClick={this.setCalculationType}>/</button>

          <input 
            className="total"
            readOnly
            type="text" 
            value={"Total is " + this.state.display} 
          />
          
        </div>
      </div>
    );
  }
}

export default App;