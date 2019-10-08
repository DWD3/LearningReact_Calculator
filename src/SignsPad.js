import React,{Component} from 'react';
import Button from './Button';


class SignsPad extends Component{

    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <tr>
                    <td><Button text="+" concreteHandler={this.props.concreteHandler}></Button></td>
                    <td><Button text="-" concreteHandler={this.props.concreteHandler}></Button></td>
                    <td><Button text="X" concreteHandler={this.props.concreteHandler}></Button></td>
                    <td><Button text="/" concreteHandler={this.props.concreteHandler}></Button></td>
                </tr>
            </div>
        )
    }
}

export default SignsPad;