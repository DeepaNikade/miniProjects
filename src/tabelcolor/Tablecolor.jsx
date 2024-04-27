import React from 'react'

const Tablecolor = () => {
  return (
    <div>
        <h1>Tablizer Color</h1>

        <div>
            <label htmlFor="numberInput">Enter a number (1-9):</label>
            <input type="number" name="" id="numberInput" min="1" max="9" />
            <button>Color Me</button>
            <button>Clear Me</button>

            <table>
                <tbody>
                    {[1,2,3,4,5,6,7,8,9].map((rowNumber)=>(
                        <tr></tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tablecolor