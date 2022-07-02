import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter1:0,
      counter2:0,
      isRunning:false
    };
    this.counterInterval1=null;
    this.counterInterval2=null;
  }
  componentDidMount(){
    console.log("mounting");
      this.setState({
          isRunning:true
      })
    this.counterInterval1=setInterval(()=>{
        this.setState((prevState)=>{
            return{
                counter1:prevState.counter1+1
            }
        })
    },1000)
    this.counterInterval2=setInterval(()=>{
        this.setState((prevState)=>{
            return{
                counter2:prevState.counter2+1
            }
        })
    },1000)
  }
  componentDidUpdate(prevProps,prevState){
    console.log("update");
    if(prevState.counter2>9){
        clearInterval(this.counterInterval2);
    }
  }
  handlePlay=()=>{
    this.setState({
        isRunning:true
    })
  this.counterInterval1=setInterval(()=>{
      this.setState((prevState)=>{
          return{
              counter1:prevState.counter1+1
          }
      })
  },1000)
  if(this.state.counter2 <= 10){
    this.counterInterval2=setInterval(()=>{
        this.setState((prevState)=>{
            return{
                counter2:prevState.counter2+1
            }
        })
    },1000)
  }
  }
  handlePause = ()=>{
    this.setState({
        isRunning:false
    })
    console.log("cleared")
    clearInterval(this.counterInterval1);
    clearInterval(this.counterInterval2);
  }
//   increment = () => {
//     this.setState((prevState) => {
//       return {
//         value: prevState.value + 1
//       };
//     });
//   };
  render() {
     const {counter1,counter2,isRunning}= this.state;
    // if (this.state.value >= 10) {
    //   val1 = 10;
    // }
    console.log("render");
    return (
      <div className="App">
        <p>Counter1:{counter1}</p>
        <p>Counter2:{counter2}</p>
        {isRunning ?<button type="button" onClick={this.handlePause}>
          pause
        </button>:<button type="button" onClick={this.handlePlay}>
          play
        </button> }
      </div>
    );
  }
}
