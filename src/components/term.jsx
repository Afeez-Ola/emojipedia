import React from 'react';
import Emoji from './emoji';
import { Name } from './name';
import { Meaning } from './meaning';

export function Term(props) {
 return (
  <div className='term'>
   <dt>
    <Emoji emoji={props.emoji}></Emoji>
    <Name name={props.name}></Name>
   </dt>
   <Meaning meaning={props.meaning}></Meaning>
  </div>
 );
}
