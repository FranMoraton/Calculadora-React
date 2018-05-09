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

const KEYS = {
    NUMBER: 'number',
    OPERATOR: 'operator',
    DECIMAL: 'decimal',
    CLEAR: 'clear',
    CALCULATE: 'calculate'
}

const NUMBERS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

class CalculatorKeys extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: '',
            storage: '',
            number: this.props.number,
            operator: ''
        }
    }

    handleNumber = (number) => {
        let displayNumber;
        if (this.state.number === '0' || this.state.buttonClicked === KEYS.OPERATOR || this.state.buttonClicked === KEYS.CALCULATE) {
            displayNumber = number;
        } else {
            displayNumber = this.state.number + number;
        }
        this.props.buttonClicked(displayNumber);
        this.setState({ buttonClicked: KEYS.NUMBER, number: displayNumber });
    }

    handleAdd = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: this.state.number, buttonClicked: KEYS.OPERATOR, operator: OPERATORS.ADD });
    }

    handleSubstract = () => {
    }

    handleMultiply = () => {
    }

    handleDivide = () => {
    }

    handleDecimal = () => {
    }

    handleClear = () => {
    }


    handleEqual = () => {
        this.props.calculate(this.state.number, this.state.storage, this.state.operator);
    }

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
    {
        console.log(value);
            if(NUMBERS.includes(value))
            {
                /*
                let displayNumber;

                if (this.state.buttonClicked === KEYS.OPERATOR || this.state.buttonClicked === KEYS.CALCULATE) {
                    return;
                }

                displayNumber = this.state.value + value;
                this.props.buttonClicked(displayNumber);
                this.setState({ buttonClicked: KEYS.NUMBER, number: displayNumber});
                console.log(displayNumber);
            } else {*/
                this.handleNumber(value);
            }else if (value === OPERATORS.ADD) {
             this.handleAdd()
            }
            else if (value === OPERATORS.CALCULATE) {
                this.handleEqual()
            }

    }


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
             keyFunction={this.operationHandler} 
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