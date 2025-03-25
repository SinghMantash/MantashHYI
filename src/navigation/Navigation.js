import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UsersListScreen from '../screens/UsersListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="UsersList">
      <Stack.Screen name="UsersList" component={UsersListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;