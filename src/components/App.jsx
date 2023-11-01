import React from 'react';
import '../styles.css';
import  {emojipedia}  from '../emojipedia';
import Dictionary from './dictionary';

function App() {
  return (
   <div>
    <div>
     <h1>
      <span>emojipedia</span>
     </h1>
    </div>
    {emojipedia.map((emojipedia) => {
     return (
      <Dictionary
       emoji={emojipedia.emoji}
       name={emojipedia.name}
       meaning={emojipedia.meaning}
      ></Dictionary>
     );
    })}
   </div>
  );

}

export default App;
