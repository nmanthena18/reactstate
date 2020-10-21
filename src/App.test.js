import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore()({});

import App from './App';



let wrapper;
const setup = function(initialFruitState) {
  const updateState = jest.fn();
  React.useState = jest.fn(() => [initialFruitState, updateState]);
  wrapper = shallow(<Provider store={mockStore}><App /></Provider>).dive().dive();
  return wrapper
}
 
describe('test fruit state', () => {
  test('banana state', () => {
    const wrapper = setup('banana')
    const banana = wrapper.find('[test-id="fruite"]').text();
    expect(banana).toBe('Banana');
    // some assertion here about what should happen if state is banana
  });
  test('apple state', () => {
    const wrapper = setup('apple')
    const apple = wrapper.find('[test-id="fruite"]').text();
    expect(apple).toBe('Apple');
    // some assertion here about what should happen if state is apple
  });
  test('invalid state', () => {
    const wrapper = setup('strawberry');
    wrapper.find('[test-id="name"]').simulate('change', {target:{value:"ba"}})
    const banana = wrapper.find('[test-id="fruite"]').text();
    expect(banana).toBe('None');
    // some assertion here about what should happen if state is not one of the expected options
  });
});
