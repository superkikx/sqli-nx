import React, { useState } from 'react';
import './list.scss';

export const List = props => {
 
  const { tracks } = props;
  const [isCurrent, setIsCurrent] = useState('');


  const handlePreview = x => {
    props.playPreview(x.preview);
    setIsCurrent(x);
  };

  return (
    <ul className="playlist">
      {tracks.map((x, i) => (
        <li
          className={isCurrent === x ? 'current' : ''}
          onClick={() => {
            handlePreview(x);
            props.retrieveName(x.name);
          }}
          key={i}
        >
          {x.name}
        </li>
      ))}
    </ul>
  );
};
