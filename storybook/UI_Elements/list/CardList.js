'use client';

import React from 'react';
import Card from '../card';
import { CardListSC } from './styled';

const CardList = ({ list }) => {
  return (
    list && (
      <CardListSC>
        {list.map((item) => {
          <Card character={item} />;
        })}
      </CardListSC>
    )
  );
};

export default CardList;
