
import React from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <div style={{ transitionDelay: `${delay}s` }} className="fade-in-element">
      {children}
    </div>
  );
};

export default FadeIn; 