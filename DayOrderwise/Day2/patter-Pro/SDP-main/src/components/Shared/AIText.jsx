import React, { useState, useEffect } from 'react';

const AIText = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  }, [text, typingSpeed]);

  return (
    <div className="ai-text">
      <p>{displayedText}</p>
    </div>
  );
};

export default AIText;
