import React from 'react';
import { config } from '@/lib/config';

const getPlanets = async (url) => {
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();

  return data;
};

const Planets = async () => {
  const { data: planets } = await getPlanets(config.apiPathName.planets);
  return (
    <div>
      <div>
        <h2 style={{ marginBottom: '2rem' }}>
          This page data is retrieved from Mongo DB
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        {planets &&
          planets.map((planet) => (
            <div
              key={planet.id}
              style={{
                minWidth: '200px',
                display: 'flex',
                flexFlow: 'column wrap',
                gap: '0.5rem',
              }}
            >
              <h3> {planet.name}</h3>
              <span> Order from sun: {planet.orderFromSun}</span>
              <span>Has rings: {`${planet.hasRings}`}</span>
              <span>main Atmosohere: {`${planet.mainAtmosphere}`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Planets;
