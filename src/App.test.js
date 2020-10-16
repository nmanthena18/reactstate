import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore()({});

import App from './App';

let wrapper;
const updateState = jest.fn();
beforeEach(() => {
  React.useState = jest.fn(() => ["", updateState]);
  wrapper = shallow(<Provider store={mockStore}><App /></Provider>).dive().dive();
});
describe("App component test", () => {
  test('renders learn react link', () => {
    const input = wrapper.find('[test-id="name"]');
    const event = {target: {value: 'apple'}};
    input.simulate('change', event);
    expect(updateState).toHaveBeenCalledWith("apple")
  });

  test('renders learn react link', () => {
    const input = wrapper.find('[test-id="name"]');
    const event = {target: {value: 'banana'}};
    input.simulate('change', event);
    expect(updateState).toHaveBeenCalledWith("banana")
  });

})
