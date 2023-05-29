import React from 'react';
// import '../assets/css/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='text-white h-112 '>
      {numClics}
    </div>
  );   
}

export default Contador;