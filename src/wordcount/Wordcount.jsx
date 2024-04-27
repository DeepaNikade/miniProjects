import React, { useState } from 'react';

const WordCount = () => {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const countChars = () => {
    return text.length;
  };

  const countParagraphs = () => {
    const paragraphs = text.trim().split('\n\n');
    return paragraphs.length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={10}
        cols={50}
        placeholder="Type your text here..."
      ></textarea>
      <div>
        <p>Word Count: {countWords()}</p>
        <p>Character Count: {countChars()}</p>
        <p>Paragraph Count: {countParagraphs()}</p>
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default WordCount;
