import React, { useState } from 'react';
import { add, subtract, multiply, divide } from '../../domain/usecases/arithmetic';

const Calculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
    setResult('');
  };

  const calculateResult = () => {
    try {
      // parse input like '12+7' or '5*3'
      // Here we assume a simple format: number operand number
      // This is a simple placeholder parser, ideally should be a proper parser

      // Extract numbers and operator
      const match = input.match(/(\d+)([+\-*\/])(\d+)/);
      if (!match) {
        setResult('Error');
        return;
      }

      const a = parseFloat(match[1]);
      const op = match[2];
      const b = parseFloat(match[3]);

      let res: number | Error;

      switch (op) {
        case '+':
          res = add(a, b);
          break;
        case '-':
          res = subtract(a, b);
          break;
        case '*':
          res = multiply(a, b);
          break;
        case '/':
          res = divide(a, b);
          break;
        default:
          res = new Error('Unknown operation');
      }

      if (res instanceof Error) {
        setResult(res.message);
      } else {
        setResult(String(res));
      }
    } catch (e) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div style={{ maxWidth: 300, margin: '10px auto', padding: 10, border: '1px solid #ccc' }}>
      <div
        style={{
          height: 40,
          marginBottom: 10,
          border: '1px solid #666',
          padding: 5,
          fontSize: 18,
          backgroundColor: '#eee'
        }}
        data-testid="display"
      >
        {result || input || '0'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
        {["7", "8", "9", "+"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "-"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "*"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {["0", "C", "=", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === 'C') {
                handleClear();
              } else if (btn === '=') {
                calculateResult();
              } else {
                handleButtonClick(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
