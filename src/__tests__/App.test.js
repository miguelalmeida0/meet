import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
 let AppWrapper;
 beforeAll(() => {
 AppWrapper = shallow(<App />);
 });

test('render list of events', () => {
  expect(AppWrapper.find(EventList)).toHaveLength(1);
});

test('render CitySearch', () => {
  const AppWrapper = shallow(<App />);
  expect(AppWrapper.find(CitySearch)).toHaveLength(1);
});

test('testing to see if NumberOfEvents renders properly!', () => {
  expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
}) 

});