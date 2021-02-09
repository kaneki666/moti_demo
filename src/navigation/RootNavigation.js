import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Category from '../screens/Category/Category';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Category">
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
