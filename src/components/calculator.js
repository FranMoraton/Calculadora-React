import React, { Component } from 'react';
import CalculatorKeys from './calculatorKeys.js'
import CalculatorDisplay from './calculatorDisplay.js';

const OPERATORS = {
  ADD: '+',
  SUBSTRACT: '-',
  MULTIPLY: 'x',
  DIVIDE: '÷'
}

class Calculator extends Component 
{
  state = { result: '0' }

  changeDisplay = (number) => {
    this.setState({ result: number });
  }

  calculate = (n1, n2, operator) => {
    let result = ''

    if (operator === OPERATORS.ADD) {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }

    this.setState({ result: result });
  }

    
    render  = () =>
      
        <div className="calculator">
            <CalculatorDisplay result={this.state.result}/>
            <CalculatorKeys calculate={this.calculate} number={this.state.result} buttonClicked={this.changeDisplay}/>
        </div>
        
      
    
}
  
  export default Calculator;