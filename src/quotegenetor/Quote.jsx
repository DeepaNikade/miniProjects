import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        // Fetch quote when the component mounts
        fetchQuote();
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const fetchQuote = async () => {
        try {
            const res = await axios.get(`https://api.quotable.io/random?tags=${input}`);
            const data = res.data;
            console.log(data);
            setQuote(data.content);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div>
            <h1>Quote Generator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={handleChange} 
                placeholder="Enter a tag for the quote" 
            />
            <button onClick={fetchQuote}>Generate</button>
            {quote ? (
                <blockquote>
                    <p>{quote}</p>
                </blockquote>
            ) : (
                <p>Enter a tag and click Generate to get a quote</p>
            )}
        </div>
    );
}

export default Quote;
