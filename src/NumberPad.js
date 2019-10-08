import React,{Component} from 'react';
import Button from './Button';


class NumberPad extends Component{

    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <tr>
                    <td><Button text="1" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="2" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="3" concreteHandler={this.props.concreteHandler}/></td>
                </tr>
                <tr>
                    <td><Button text="4" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="5" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="6" concreteHandler={this.props.concreteHandler}/></td>
                </tr>                
                <tr>
                    <td><Button text="7" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="8" concreteHandler={this.props.concreteHandler}/></td>
                    <td><Button text="9" concreteHandler={this.props.concreteHandler}/></td>
                </tr>
                
                    <tr>
                        <td><Button text="0" concreteHandler={this.props.concreteHandler}></Button></td>
                    </tr>                
            </div>
        )
    }
}

export default NumberPad;