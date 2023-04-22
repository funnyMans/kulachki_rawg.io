'use client';

import React from 'react';
import Link from 'next/link';

import {
  ContentWrapperSC,
  GenreSC,
  GridBoxSC,
  MetacriticSC,
  PlatformSC,
  SingleGameContentSC,
  StoreSC,
} from './styled';
import { config } from '@/lib/config';
import useCustomQuery from '@/hooks/useCustomQuery';

const SingleGameContent = ({ gameId }) => {
  const { data: game } = useCustomQuery(
    'singleGame',
    `${config.api.RAWG_API}/games/${gameId}?`,
    {}
  );

  return (
    game && (
      <SingleGameContentSC bg={game.background_image}>
        <h1>{game.name}</h1>
        <h2>
          <Link href={game.website}></Link>
        </h2>
        <h3>Average rating: {game.rating}</h3>
        <h4>{game.description_raw}</h4>

        <h3>metacritic: {game.metacritic}</h3>

        <ContentWrapperSC>
          {!!game.metacritic_platforms.length && (
            <GridBoxSC>
              <h2>Metacritics</h2>
              {game.metacritic_platforms.map((meta) => (
                <MetacriticSC key={meta.url}>
                  <span>score: {meta.metascore}</span>
                  <span>
                    Platform: <Link href={meta.url}>{meta.platform.name}</Link>
                  </span>
                </MetacriticSC>
              ))}
            </GridBoxSC>
          )}
          <GridBoxSC>
            <h2>Platforms</h2>
            {game.platforms.map((platform) => (
              <PlatformSC
                key={platform.platform.id}
                bg={platform.platform.image_background}
              >
                <h4> {platform.platform.name}</h4>
                <p>{game.requirements?.minimum || ''}</p>
              </PlatformSC>
            ))}
          </GridBoxSC>
          <GridBoxSC>
            <h2>Stores</h2>
            {game.stores.map((store) => (
              <StoreSC key={store.store.id} bg={store.store.image_background}>
                <Link href={`https://${store.store.domain}`} target={'_blank'}>
                  {store.store.name}
                </Link>
              </StoreSC>
            ))}
          </GridBoxSC>
          <GridBoxSC>
            <h2>Genres</h2>
            {game.genres.map((genre) => (
              <GenreSC key={genre.id} bg={genre.image_background}>
                <h4> {genre.name}</h4>
              </GenreSC>
            ))}
          </GridBoxSC>
        </ContentWrapperSC>
      </SingleGameContentSC>
    )
  );
};
export default SingleGameContent;
