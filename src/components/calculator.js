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
/*
  calculateCommand = [
     [OPERATORS.ADD]:{ () => return},
     [OPERATORS.SUBSTRACT]:,
     [OPERATORS.MULTIPLY]:,
     [OPERATORS.DIVIDE]: 
  ]
*/
  calculate = (n1, n2, operator) => {
    let result = ''

    if (operator === OPERATORS.ADD) {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === OPERATORS.SUBSTRACT) {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === OPERATORS.MULTIPLY) {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === OPERATORS.DIVIDE) {
      result = parseFloat(n1) / parseFloat(n2)
    }

    this.changeDisplay( result );
  }

    
    render  = () =>
      
        <div className="calculator">
            <CalculatorDisplay result={this.state.result}/>
            <CalculatorKeys calculate={this.calculate} number={this.state.result} buttonClicked={this.changeDisplay}/>
        </div>
        
      
    
}
  
  export default Calculator;