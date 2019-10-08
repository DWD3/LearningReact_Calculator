import React,{Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props);
    }
    handleClick = (e) => {
        this.props.concreteHandler(this.props.text)
    }
    render() {
        return(
            <button onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

export default Button;