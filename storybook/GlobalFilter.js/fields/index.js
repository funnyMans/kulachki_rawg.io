'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, useFormikContext } from 'formik';

import PlatformSelector from './platformSelector';
import DoubleRangeSlider from './doubleRangeSlider';

import {
  reset,
  selectGamelistFilters,
  setFilters,
} from '@/lib/redux/features/gamelistFilters/gamelistFiltersSlice';
import { ButtonSC } from '@/storybook/UI_Elements/button/styled';

const FilterFieldsForm = () => {
  const filters = useSelector(selectGamelistFilters);
  const dispatch = useDispatch();
  const { values } = useFormikContext();
  return (
    <Form>
      <Field
        component={DoubleRangeSlider}
        name='metacritic'
        min={0}
        max={100}
        id={'meta'}
      />

      <Field name='platforms' component={PlatformSelector} />
      <div>
        <ButtonSC
          variant='success'
          type='submit'
          onClick={() => {
            dispatch(setFilters(values));
          }}
        >
          Apply filters
        </ButtonSC>
        <ButtonSC
          variant='danger'
          type='reset'
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </ButtonSC>
      </div>
    </Form>
  );
};

export default FilterFieldsForm;
