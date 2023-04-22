import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGamelistOrder,
  setOrder,
} from '@/lib/redux/features/gamelistOrder/gamelistOrderSlice';
import Select from '@/storybook/UI_Elements/select';

import { GamelistOrderSC } from './styled';
import { gamelistOrderOptions } from '../../../mock/gamelistOrder';

const GamelistOrder = () => {
  const [orderValue, setOrderValue] = useState();
  const dispatch = useDispatch();
  const order = useSelector(selectGamelistOrder);

  const orderChangeHandler = (value) => {
    setOrderValue(value);
    dispatch(setOrder(value));
  };

  const radioChangeHandler = (e) => {
    const value = e.target.checked && e.target.value;
    dispatch(
      setOrder(
        value
          ? e.target.value + order
          : order.startsWith('-')
          ? order.slice(1)
          : order
      )
    );
  };
  return (
    <GamelistOrderSC>
      <span>Order games by: </span>
      <Select
        name={'orderGames'}
        options={gamelistOrderOptions}
        changeHandler={orderChangeHandler}
        value={orderValue}
        setOrderValue={setOrderValue}
      />
      {orderValue && (
        <fieldset id='orderRadio'>
          <label htmlFor='desc'>Desc</label>
          <input
            id='desc'
            type='radio'
            value='-'
            name='order'
            onChange={radioChangeHandler}
          />
          <label htmlFor='asc'>Asc</label>

          <input
            id='asc'
            type='radio'
            value=''
            name='order'
            defaultChecked
            onChange={radioChangeHandler}
          />
        </fieldset>
      )}
    </GamelistOrderSC>
  );
};

export default GamelistOrder;
