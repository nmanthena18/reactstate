import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  const updateState = jest.fn();
  React.useState = jest.fn(() => ["", updateState]);
  const input = wrapper.find('[test-id="name"]');
  const event = {target: {value: 'test'}};
  input.simulate('change', event);
  expect(updateState).toHaveBeenCalledWith("test")
});
