import 'react-native';
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, TextInput, ListView, View, StyleSheet } from 'react-native';
import Search from '../components/Search';
import renderer from 'react-test-renderer';

const tree = renderer.create(
  <Search />
).toJSON();
 
it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
