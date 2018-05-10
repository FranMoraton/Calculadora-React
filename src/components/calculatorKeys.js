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
            buttonPressed: '',
            storage: '',
            number: this.props.number,
            operator: ''
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({number:nextProps.number});
    }

    handleNumber = (number) => {
        let displayNumber;
        if (this.state.number === '0' || this.state.buttonPressed === KEYS.OPERATOR || this.state.buttonPressed === KEYS.CALCULATE) {
            displayNumber = number;
        } else {
            displayNumber = this.state.number + number;
        }
        this.props.buttonClicked(displayNumber);
        this.setState({ buttonPressed: KEYS.NUMBER, number: displayNumber });
    }


    handleAdd = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: this.state.number, buttonPressed: KEYS.OPERATOR, operator: OPERATORS.ADD });      
    }

    handleSubstract = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: this.state.number, buttonPressed: KEYS.OPERATOR, operator: OPERATORS.SUBSTRACT });
    }

    handleMultiply = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: this.state.number, buttonPressed: KEYS.OPERATOR, operator: OPERATORS.MULTIPLY });
    }

    handleDivide = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: this.state.number, buttonPressed: KEYS.OPERATOR, operator: OPERATORS.DIVIDE });
    }

    handleDecimal = () => {
    }

    handleClear = () => {
        this.props.buttonClicked('0');
        this.setState({ storage: '', buttonPressed: '', operator: '' , number: '0'});
    }


    handleEqual = () => {
        this.props.calculate(this.state.storage, this.state.number, this.state.operator);        
    }

   
    operationsCommand = {
    [OPERATORS.ADD] : this.handleAdd,
    [OPERATORS.SUBSTRACT] :  this.handleSubstract,
    [OPERATORS.MULTIPLY] : this.handleMultiply,
    [OPERATORS.DIVIDE] :  this.handleDivide,
    [OPERATORS.DECIMAL] : this.handleDecimal,
    [OPERATORS.CLEAR] : this.handleClear,
    [OPERATORS.CALCULATE] : this.handleEqual
    }    



    operationHandler = (value) =>
    {
            if(NUMBERS.includes(value))
            {
                this.handleNumber(value);
            } else {
                this.operationsCommand[value]();
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