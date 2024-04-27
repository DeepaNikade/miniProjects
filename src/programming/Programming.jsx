import React from 'react';
import languagesData from './data';

function Language({name, year, creator, usecase}) {
    return (
      <div>
          <h1>{name}</h1>
          <p>Year: {year}</p>
          <p>Creator: {creator}</p>
          <p>Usecase: {usecase}</p>
      </div>
    );
  }
  

const Programming = () => {
  return (
    <div>
        {languagesData.map((elem,index)=>(
            <Language key={index} {...elem}/>
        ))}

    </div>
  )
}

export default Programming;