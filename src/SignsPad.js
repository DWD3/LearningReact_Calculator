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
                    <td><Button text="+"></Button></td>
                    <td><Button text="-"></Button></td>
                    <td><Button text="X"></Button></td>
                    <td><Button text="/"></Button></td>
                </tr>
            </div>
        )
    }
}

export default SignsPad;