import React, {Component} from 'react';

class CalculatorDisplay extends Component
{
    render = () =>
        <div className ="calculator__display">
        {this.props.result}
        </div>;

}

export default CalculatorDisplay;