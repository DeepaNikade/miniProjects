import React, { useState } from 'react'

const AnagramChecker = () => {
    const [input1,setinput1]=useState("");
    const [input2,setinput2]=useState("");
    const [isanagram,setisanagram]=useState(null);

    const isanagramfunc=(str1,str2)=>{
     const clearstr=(str)=>str.replace(/\s/g,'').toLowerCase();
     const normalstr1=clearstr(str1);
     const normalstr2=clearstr(str2);

     return normalstr1.split('').sort().join('') === normalstr2.split('').sort().join('');
    }

    const handelanagram=()=>{
        const result=isanagramfunc(input1,input2);
        setisanagram(result);
       
    }
  return (
    <div>
        <input type="text" placeholder='enter first word' value={input1} onChange={(e)=>setinput1(e.target.value)}/>
        <input type="text" placeholder='enter second word' value={input2} onChange={(e)=>setinput2(e.target.value)} />
        <button onClick={handelanagram}>check</button>

        {isanagram !==null && (
            <p>{isanagram ?'is angamram':'notangram'}</p>
        )}
    </div>
  )
}

export default AnagramChecker