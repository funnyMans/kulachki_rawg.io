'use client';

import React, { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { GameCardContainerSC, GamelistSC } from './styled';
import GameCard from './gameCard';

import { config } from '@/lib/config';
import { UseInfiniteQueryGames } from '@/hooks/useInfiniteQueryGames';

const GamesList = () => {
  const [limit] = useState(20);
  const { data, status, fetchNextPage, hasNextPage } = UseInfiniteQueryGames(
    'games',
    config.apiPathName.games,
    {
      key: config.api.API_KEY,
      page_size: limit,
    }
  );

  return (
    <GamelistSC>
      {status === 'success' && (
        <InfiniteScroll
          dataLength={data?.pages.length * limit}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          {data?.pages.map((page) => (
            <div key={page.next}>
              <GameCardContainerSC>
                {page.results.map((character) => (
                  <GameCard key={character.id} {...character} />
                ))}
              </GameCardContainerSC>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </GamelistSC>
  );
};

export default GamesList;
