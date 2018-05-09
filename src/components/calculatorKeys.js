import React, { Component } from 'react';
import Button from './button.js'

 const OPERATORS = {
    ADD : "+",
    SUBSTRACT: "-",
    MULTIPLY: "x",
    DIVIDE: "÷",
    DECIMAL: ".",
    CLEAR: "AC",
    CALCULATE: "="
}

class CalculatorKeys extends Component
{
   /*
    operationsCommand = {
       OPERATORS.ADD : add = () =>console.log(),
       OPERATORS.SUBSTRACT :  substract = () =>console.log(),
       OPERATORS.MULTIPLY : multiply = () =>console.log(),
       OPERATORS.DIVIDE :  divide = () =>console.log(),
       OPERATORS.DECIMAL : decimal = () =>console.log(),
       OPERATORS.CLEAR : clear = () =>console.log(),
       OPERATORS.CALCULATE : calculate = () =>console.log()
    }
*/
    operationHandler = (value) =>
       /* operationsCommand[value]*/console.log(value);

    getKeys(){
    const calculatorButtons = [
        {id:1, className : 'key--operator', action:"add", value : OPERATORS.ADD },
        {id:2, className : 'key--operator', action:"substract", value : OPERATORS.SUBSTRACT },
        {id:3, className : 'key--operator', action:"multiply", value : OPERATORS.MULTIPLY },
        {id:4, className : 'key--operator', action:"divide", value : OPERATORS.DIVIDE },
        {id:5, value : "7"},
        {id:6, value : "8"},
        {id:7, value : "9"},
        {id:8, value : "4"},
        {id:9, value : "5" },
        {id:10, value : "6" },
        {id:11, value : "1" },
        {id:12, value : "2" },
        {id:13, value : "3" },
        {id:14, value : "0" },
        {id:15, action:"decimal", value : OPERATORS.DECIMAL },
        {id:16, action:"clear", value : OPERATORS.CLEAR },
        {id:17, className : 'key--equal', action:"calculate", value : OPERATORS.CALCULATE }
        ]

        return calculatorButtons.map(
            button =>
             <Button 
             key={button.id}
             keyFunction={() => this.operationHandler(button.value)} 
             className={button.className} 
             action={button.action}
             value={button.value}
             />)
    }
    render = () =>
    
         <div className ="calculator__keys">
        {this.getKeys()}
        </div>;

}

export default CalculatorKeys;