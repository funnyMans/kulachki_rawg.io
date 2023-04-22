'use client';

import React from 'react';
import { useFormikContext } from 'formik';
import RangeSlider from 'react-range-slider-input';

import 'react-range-slider-input/dist/style.css';

const DoubleRangeSlider = ({ min, max }) => {
  const { values, setFieldValue } = useFormikContext();
  const handleOnChange = (values) => {
    setFieldValue('metacritic', values);
  };

  return (
    <div>
      <RangeSlider
        maxValue={max}
        minValue={min}
        values={values.metacritic}
        onInput={handleOnChange}
      />
    </div>
  );
};

export default DoubleRangeSlider;
