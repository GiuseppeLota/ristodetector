import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './';

it('no value typed - the state var shoud be empty', () => {
  const searchFn = () => {};

  const output = shallow(
    <SearchInput searchFn={searchFn} />
  );
  expect(output.state().value).toEqual("");
});

it('is typed a value and pressed the button - the state should contain the value typed', () => {
  const searchFn = () => {};
  const SEARCH_TERM = 'SEARCH_TERM';

  const output = shallow(
    <SearchInput searchFn={searchFn} />
  );

  output.find('input').simulate('change', { target: { value: SEARCH_TERM } });
  output.find('#button-holder').simulate('click', { preventDefault: () => {}});
  expect(output.state().value).toEqual(SEARCH_TERM);
});

it('is pressed the button without typing a location - the state should remain empty', () => {
  const searchFn = () => {};

  const output = shallow(
    <SearchInput searchFn={searchFn} />
  );
  output.find('#button-holder').simulate('click', { preventDefault: () => {}});
  expect(output.state().value).toEqual("");
});