import React, { useState } from 'react';

const buttonStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  margin: '0.25rem',
  width: '3rem',
  height: '3rem',
  cursor: 'pointer',
};

const displayStyle: React.CSSProperties = {
  width: '14rem',
  height: '3rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  textAlign: 'right',
  padding: '0.5rem',
  border: '2px solid #444',
  borderRadius: '4px',
  backgroundColor: '#eee',
};

const containerStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '1rem',
  border: '2px solid #444',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  userSelect: 'none',
};

export const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={containerStyle} aria-label="Calculator">
      <div role="textbox" aria-live="polite" style={displayStyle}>
        {input || '0'}
      </div>
      <div>
        {[7, 8, 9].map(num => (
          <button
            key={num}
            style={buttonStyle}
            onClick={() => handleButtonClick(String(num))}
            aria-label={`Digit ${num}`}
          >
            {num}
          </button>
        ))}
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('+')}
          aria-label="Add"
        >
          +
        </button>
      </div>
      <div>
        {[4, 5, 6].map(num => (
          <button
            key={num}
            style={buttonStyle}
            onClick={() => handleButtonClick(String(num))}
            aria-label={`Digit ${num}`}
          >
            {num}
          </button>
        ))}
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('-')}
          aria-label="Subtract"
        >
          -
        </button>
      </div>
      <div>
        {[1, 2, 3].map(num => (
          <button
            key={num}
            style={buttonStyle}
            onClick={() => handleButtonClick(String(num))}
            aria-label={`Digit ${num}`}
          >
            {num}
          </button>
        ))}
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('*')}
          aria-label="Multiply"
        >
          *
        </button>
      </div>
      <div>
        <button
          style={{ ...buttonStyle, width: '6.5rem' }}
          onClick={handleClear}
          aria-label="Clear"
        >
          C
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('0')}
          aria-label="Digit 0"
        >
          0
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('/')}
          aria-label="Divide"
        >
          /
        </button>
      </div>
      <div>
        <button
          style={{ ...buttonStyle, width: '14rem', marginTop: '1rem' }}
          onClick={handleEqual}
          aria-label="Equals"
        >
          =
        </button>
      </div>
    </div>
  );
};
