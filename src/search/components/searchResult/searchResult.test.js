import React from 'react';
import {shallow} from 'enzyme';
import SearchResult from './';

test('With 3 business should render 3 SearchItem', () => {
  const results = shallow(<SearchResult businesses={[{id: 'id1'},{id: 'id2'},{id: 'id3'}]} />);
  expect(results.find('SearchItem').length).toEqual(3);
});