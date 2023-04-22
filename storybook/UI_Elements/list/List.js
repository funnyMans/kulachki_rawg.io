'use client';

import React from 'react';
import { ListSC } from './styled';

const List = ({ list }) => {
  return (
    <ListSC>
      {list &&
        list.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
    </ListSC>
  );
};

export default List;
