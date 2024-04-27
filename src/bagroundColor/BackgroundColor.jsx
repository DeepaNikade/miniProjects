import React, { useState } from 'react'



const getrandomcolor=()=>{
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
}

const BackgroundColor = () => {
    const [bgcolor,setbgcolor]=useState('#FFFFF');

    const handelClick=()=>{
        const newColor=getrandomcolor();
        setbgcolor(newColor);
    }

  return (
    <div style={{backgroundColor:bgcolor, height:'100vh', width:'100vw'}}>
        <button onClick={handelClick}>Change Color</button>
    </div>
  )
}

export default BackgroundColor