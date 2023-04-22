'use client';

import React from 'react';
import Card from '@/storybook/UI_Elements/card';

const GameCard = (character) => {
  return character && <Card character={character} />;
};

export default GameCard;
