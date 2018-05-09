import React, { Component } from 'react';

class Button extends Component
{
    render()
    {
        return <button
            key={this.props.id} 
            className={this.props.className} 
            data-action={this.props.action}
            onClick={() =>this.props.keyFunction(this.props.value)}
        >{this.props.value}</button>
    }
}

export default Button;