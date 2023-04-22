import React from 'react';
import SingleGameContent from '@/storybook/pages/singleGame';

const GamePage = ({ params }) => {
  return <SingleGameContent gameId={params.id} />;
};

export default GamePage;
