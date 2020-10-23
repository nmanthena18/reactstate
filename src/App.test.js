import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { withRouter } from "react-router";
import {
  BrowserRouter,
} from "react-router-dom";

const mockStore = configureMockStore()({});

import App, {renderEmployee} from './App';


let wrapper;
const setup = function(initialFruitState, componentProps) {
  const updateState = jest.fn();
  React.useState = jest.fn(() => [initialFruitState, updateState]);
  wrapper = shallow(<Provider store={mockStore}><App {...componentProps}/></Provider>).dive().dive();
  //wrapper = shallow(<Provider store={mockStore}><BrowserRouter>{withRouter(App)(componentProps)}</BrowserRouter></Provider>).dive().dive().dive().dive().dive().dive().dive().dive().dive();
  return wrapper
}


describe('test fruit state', () => {
  test('banana state', () => {
    const wrapper = setup('apple');
    const banana = wrapper.find('[test-id="fruite"]').text();
    expect(banana).toBe('Apple');
  });

  test('banana state', () => {
    const wrapper = setup('banana')
    const banana = wrapper.find('[test-id="fruite"]').text();
    expect(banana).toBe('Banana');
  });
  
  test('invalid state', () => {
    const wrapper = setup('strawberry');
    wrapper.find('[test-id="name"]').simulate('change', {target:{value:"ba"}})
    const banana = wrapper.find('[test-id="fruite"]').text();
    expect(banana).toBe('None');
  });

  test('invalid state', () => {
    const updateState = jest.fn();
    React.useState = jest.fn(() => [{name: "person2"}, updateState]);
  
    const wrapper2 = shallow(<Provider store={mockStore}><App /></Provider>).dive().dive();
    const banana = wrapper2.find('[test-id="person"]').text();
    expect(banana).toBe('Person2');
  });

  test('invalid state', () => {
    const wrapper = setup('apple', {myname:"xyz"})
    const apple = wrapper.find('[test-id="fruite"]').text();
    
    expect(apple).toBe('Apple');
    
  });

  test("checking ABC", () => {
    const wrapper = setup("", {myname: "abc"});
    const text = wrapper.find('[test-id="test1"]').text();
    expect(text).toBe("abc")
  })


// nested if statements 
  test("checking for persons and fruite state", () => {
    const wrapper = setup("person1");
    renderEmployee("person1", 'apple');
    console.log(wrapper.debug())
    const text = wrapper.find('[test-id="person"]').text();
    expect(text).toBe("Person1");
  });

});
