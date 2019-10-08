import React from 'react';
import NumberPad from './NumberPad';
import SignsPad from './SignsPad';
import Screen from './Screen'
import Button from './Button'
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      ScreenText:"",
      stage:0,
      numberA:0,
      numberB:0,
      sign:"",
    }
  }
  numberClickedHandler = (number)=>{


    if(this.state.stage==0){
      var newDisplayingNumber = this.state.ScreenText+=number
      var newNumber = parseInt(newDisplayingNumber)
      this.setState({
        ScreenText:newDisplayingNumber,
        numberA :newNumber
      })
    }else if(this.state.stage ==1){
      var newNumber = parseInt(number)
      this.setState(
        {
        ScreenText:number,
        numberB:newNumber,
        stage:2}
        )
    }else if(this.state.stage ==2){
      var newDisplayingNumber = this.state.ScreenText+=number
      var newNumber = parseInt(newDisplayingNumber)
      this.setState({
        ScreenText:newDisplayingNumber,
        numberB :newNumber
      })

    }else if(this.state.stage ==3){
      var newNumber = parseInt(number)
      this.setState(
        {
        ScreenText:number,
        numberA:newNumber,
        stage:0}
        )
    }


  }
  signClickedHandler = (sign)=>{
    this.setState(
      {
        ScreenText:sign,
        sign:sign,
        stage:1
      }
    );
  }
  handleClear = ()=>{
    this.setState({
    ScreenText:"",
    stage:0,
    numberA:0,
    numberB:0,
    sign:"",})
  }
  handleEqual = ()=>{
    //this.setState({});
    if(this.state.sign=="+"){
      var result = this.state.numberA+this.state.numberB;

    }
    else if(this.state.sign=="-"){
      var result = this.state.numberA-this.state.numberB;

    }
    else if(this.state.sign=="X"){
      var result = this.state.numberA*this.state.numberB;

    }else if(this.state.sign=="/"){
      var result = this.state.numberA/this.state.numberB;
    }
    this.setState({
      ScreenText:result,
      stage:3,
      numberA:0,
      numberB:0,
      sign:"",})
  }
  render(){ 
    return(
    <div className="App">
      <Screen text={this.state.ScreenText}></Screen>
      <NumberPad concreteHandler={this.numberClickedHandler}></NumberPad>
      <SignsPad concreteHandler={this.signClickedHandler}></SignsPad>
      <Button text="Clear" concreteHandler={this.handleClear}></Button>
      <Button text="=" concreteHandler={this.handleEqual}></Button>
    </div>
    );
  }
}

export default App;
