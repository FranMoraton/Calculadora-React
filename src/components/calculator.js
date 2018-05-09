import React, { Component } from 'react';
import CalculatorKeys from './calculatorKeys.js'
import CalculatorDisplay from './calculatorDisplay.js';


class Calculator extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
          result : 0
        }
      }
    
    render  = () =>
      
        <div className="calculator">
            <CalculatorDisplay result={this.state.result}/>
            <CalculatorKeys />
        </div>
        
      
    
}
  
  export default Calculator;