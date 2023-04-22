'use client';

import React from 'react';

import { GlobalFilterSC } from './styled';
import { Formik } from 'formik';
import FilterFieldsForm from './fields';
import GamelistOrder from './Order';

export const GlobalFilter = () => {
  const initialvalues = {
    metacritic: [0, 100],
    platforms: [],
  };
  return (
    <GlobalFilterSC>
      <GamelistOrder />
      <Formik
        initialValues={initialvalues}
        validate={(values) => {
          const errors = {};
          if (values.metacritic < 0) {
            errors.token = 'Invalid code. Too short.';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {}}
      >
        <FilterFieldsForm />
      </Formik>
    </GlobalFilterSC>
  );
};
