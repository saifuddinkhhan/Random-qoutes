import React, { useState } from 'react'
import 'primeicons/primeicons.css';
        
import './RandomQuotes.css'
export const RandomQuotes = () => {
    let quoteLoad=[];
    async function load(){
        const response = await fetch("https://type.fit/api/quotes");
        quoteLoad = await response.json();
    }
    
    const [quotes,setQuotes] = useState({
   text:"Difficulties increase the nearer we get to the goal.",
   author:"Johann Wolfgang von Goethe"
    })
    const random =()=>{
        const select = quoteLoad[Math.floor(Math.random()*quoteLoad.length)];
        setQuotes(select);
    }
    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quotes.text} -${quotes.author.split(',')[0]}`)
    }
    load();
return (
    <div className='container'>
        <div className='quote'>{quotes.text}</div>
        <div>
        <div className='line'></div>
        <div className='bottom'>
            <div className='author'>- {quotes.author.split(',')[0]}</div>
            <div className='icons'>
            <span>
            <i className="pi pi-refresh" onClick={()=>{random()}}></i>
            <i className="pi pi-twitter" onClick={()=>{twitter()}} ></i></span>
             </div>
        </div>
    </div>
    </div>
    
  )
}