import React from 'react';
import NumberPad from './NumberPad';
import SignsPad from './SignsPad';
import Screen from './Screen'
import Button from './Button'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      ScreenText:" "
    }
  }
  concreteHandler = (number)=>{
    this.setState({ScreenText:this.state.ScreenText+=number})
  }
  handleClear = ()=>{
    this.setState({ScreenText:""})
  }
  render(){ 
    return(
    <div className="App">
      <Screen text={this.state.ScreenText}></Screen>
      <NumberPad concreteHandler={this.concreteHandler}></NumberPad>
      <Button text="Clear" concreteHandler={this.handleClear}></Button>
      <SignsPad></SignsPad>
    </div>
    );
  }
}

export default App;
