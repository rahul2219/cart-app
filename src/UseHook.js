import React,{useState,useEffect} from 'react';

function UseHook(props){
    const [userId,setUserId]=useState('1');
    const[data,setData]=useState([]);

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts?userId=${1}';
        fetch(url)
        .then((Response)=>Response.json())
        .then((data)=>{
            console.log('data',data);
            setData(data);
            
        })
    },[]);

    return(
        <div className='App'>
            <h1>App</h1>
            <button onClick={()=>setUserId('2')}>Change user id to 2</button>
            
        </div>
    )
}

export default UseHook;
