import React from 'react';
import {useState} from 'react'
export function App() {
  const [matrix, setMatrix] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === 'green') return;

    if (clickSequence.length === 8) {
    
      matrix[index]='green'
      const newMatrix = [...matrix];

      clickSequence.push(index);
      setClickSequence([...clickSequence]);

      clickSequence.forEach((i, seqIndex) => {
        setTimeout(() => {
          newMatrix[i] = 'orange';
          setMatrix([...newMatrix]);
        }, (seqIndex + 1) * 400); 
      });
    } else {
      
      const newMatrix = [...matrix];
      newMatrix[index] = 'green';
      setMatrix(newMatrix);
      setClickSequence([...clickSequence, index]);
    }
  };

  return (
   
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
    
  );
};
