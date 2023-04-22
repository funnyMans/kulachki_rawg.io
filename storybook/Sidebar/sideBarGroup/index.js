'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Subtitle from './Subtitle';
import { SidebarGroupBtnSC, SidebarGroupSC } from './styled';

const SideBarGroup = ({ group }) => {
  const allVisibilityHandler = () => {
    setShowAllSubtitles(!showAllSubtitles);
  };

  const [showAllSubtitles, setShowAllSubtitles] = useState(false);
  return (
    <SidebarGroupSC>
      {group.subtitles.length ? (
        <h2>{group.title}</h2>
      ) : (
        <Link href={'/catalog'}>
          <h2>{group.title}</h2>
        </Link>
      )}
      <div>
        {group.subtitles.map((subtitle, idx) => {
          return group.subtitles.length <= 3 || idx < 3 || showAllSubtitles ? (
            <Subtitle key={subtitle.id} subtitle={subtitle}></Subtitle>
          ) : null;
        })}
        {group.subtitles.length > 3 && (
          <SidebarGroupBtnSC onClick={allVisibilityHandler}>
            {showAllSubtitles ? 'hide' : 'show all'}
          </SidebarGroupBtnSC>
        )}
      </div>
    </SidebarGroupSC>
  );
};

export default SideBarGroup;
