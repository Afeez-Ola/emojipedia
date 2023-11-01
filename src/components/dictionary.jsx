import React from 'react';
import { Term } from './term';

function Dictionary(props) {
 return (
  <div className='dictionary'>
   <Term emoji={props.emoji} name={props.name} meaning={props.meaning}></Term>
  </div>
 );
}

export default Dictionary;
