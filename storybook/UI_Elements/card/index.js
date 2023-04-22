'use client';

import React from 'react';
import Link from 'next/link';

import Slider from './Slider/Slider';
import { CardDescriptionSC, CardInfoSC, CardSC, CardTitleSC } from './styled';

const Card = ({ character }) => {
  const { rating, playtime, metacritic, short_screenshots } = character;
  return (
    <CardSC key={character.id}>
      {short_screenshots && (
        <Slider screenshots={character.short_screenshots} />
      )}
      <CardInfoSC>
        <Link href={`/catalog/${character.id}`}>
          <CardTitleSC> {character.name}</CardTitleSC>
        </Link>
        <CardDescriptionSC>
          <div>
            <span>Rating:</span>
            <span>Play time:</span>
            <span>Metacritic rating:</span>
          </div>
          <div>
            {rating && <span>{character.rating}</span>}
            {playtime && <span>{character.playtime}</span>}
            {metacritic && <span>{character.metacritic}</span>}
          </div>
        </CardDescriptionSC>
      </CardInfoSC>
    </CardSC>
  );
};

export default Card;
