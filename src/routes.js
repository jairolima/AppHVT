/* eslint-disable react/prop-types */

import React from 'react';
// import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {setNavigator} from './services/navigationService';

// starter path
import SignIn from './pages/Unauthenticated/SignIn';

// profile tab path
import Profile from './pages/Authenticated/Profile';

// dashboard tab path
import Dashboard from './pages/Authenticated/Dashboard';

const Stack = createStackNavigator();

export default function Routes() {
  const SignedIn = useSelector((state) => state.auth.signed);
  // testes const SignedIn = true;

  function StackProfile() {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false, tableShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer ref={setNavigator}>
      {SignedIn ? (
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={StackProfile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
