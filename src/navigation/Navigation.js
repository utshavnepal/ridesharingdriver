import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../authentication/SignInScreen';

import NewPasswordName from '../authentication/NewPasswordName';
import ForgotPassword from '../authentication/ForgotPassword';
import HomePage from '../screens/Homepage';
import Routemap from '../screens/Routemap';
import Map from '../screens/Map';
import ConfirmUser from '../screens/ConfirmUser';
import Summary from '../screens/Summary';
import ArriveDestination from '../screens/ArriveDestination';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer initialRouteName='SignIn'>
        <Stack.Navigator >
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            
            <Stack.Screen name='NewPassword' component={NewPasswordName}/>
            <Stack.Screen name='ForgotPwd' component={ForgotPassword}/>
            <Stack.Screen name='ArriveDestination' component={ArriveDestination}/>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name='Map' component={Map}/>
            <Stack.Screen name='Routemap' component={Routemap}/>
            <Stack.Screen name='ConfirmUser' component={ConfirmUser}/>
            <Stack.Screen name='Summary' component={Summary}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})