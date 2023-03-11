import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #E60A52 }
`;

const TextWrapper = styled.span`
  border-right: 0.15em solid #000;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 1.6s steps(30, end), ${blinkCursor} 0.5s step-end infinite;
`;
  
const phrases = [
    "Assistência técnica de smartphones 📱",
    "Produtos de qualidade 🛒",
    "Siga-nos no Instagram 😍",
];

const TypingText = () => {


  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    const intervalId = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setShowText(true);
      }, 100);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return <>{showText && <TextWrapper>{phrases[phraseIndex]}</TextWrapper>}</>;
};

export default TypingText;
