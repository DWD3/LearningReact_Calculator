import React,{Component} from 'react';

class Screen extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Screen;