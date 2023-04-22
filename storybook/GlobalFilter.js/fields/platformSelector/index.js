import React from 'react';
import { useFormikContext } from 'formik';

import { config } from '@/lib/config';
import useCustomQuery from '@/hooks/useCustomQuery';
import Select from '@/storybook/UI_Elements/select';

const PlatformSelector = () => {
  const { values, setFieldValue } = useFormikContext();
  const { data: platforms } = useCustomQuery(
    'platforms',
    config.apiPathName.platforms,
    {}
  );

  const handlePlatformsChange = (options) => {
    const selectedPlatforms = Array.from(options).map((opt) => opt.value);
    setFieldValue('platforms', selectedPlatforms);
  };

  return (
    <>
      <span>press Ctrl key for multiselection </span>
      {!!values.platforms.length && <span>{values.platforms.join(' , ')}</span>}
      <Select
        name={''}
        options={platforms?.results}
        changeHandler={handlePlatformsChange}
        isMulty
        id={'platforms'}
      />
    </>
  );
};

export default PlatformSelector;
