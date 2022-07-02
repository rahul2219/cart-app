import React from "react";

export default class Timer1 extends React.Component{
    constructor(){
        super();
        this.state={
            counter1:0,
            counter2:0,
            isRunning:false
        };
        this.counterInterval1=null;
        this.counterInterval12=null;
    }
    componentDidMount(){
        this.setState({
            isRunning:true
        })
        this.counterInterval1=setInterval(()=>{
            this.setState((prevstate)=>{
                return{
                    counter1:prevstate.counter1+1,
                }
            })
        },1000)
        this.counterInterval2=setInterval(()=>{
            this.setState((prevstate)=>{
                return{
                    counter2:prevstate.counter2+1,
                }
            })
        },1000)
    }

    handlePause=()=>{
        this.setState({
            isRunning:false
        })
        clearInterval(this.counterInterval1);
        clearInterval(this.counterInterval2);
    }
    handlePlay=()=>{
        this.setState({
            isRunning:true
        })
        this.counterInterval1=setInterval(()=>{
            this.setState((prevstate)=>{
                return{
                    counter1:prevstate.counter1+1,
                }
            })
        },1000)
        if(this.state.counter2 <= 10){
            this.counterInterval2=setInterval(()=>{
                this.setState((prevstate)=>{
                    return{
                        counter2:prevstate.counter2+1
                    }
                })
            },1000)
        }
    }
    
    componentDidUpdate(){
        if(this.state.counter2 >= 10){
            clearInterval(this.counterInterval2);
        }
    }

    render(){
        const{counter1,counter2,isRunning}=this.state;
        return(
            <div className="App">
                <p>Counter1:{counter1}</p>
                <p>Counter2:{counter2}</p>
                {isRunning?<button type="button" onClick={this.handlePause}>pause</button>:
                <button type="button" onClick={this.handlePlay}>play</button>
                }
            </div>
        )
    }



}

