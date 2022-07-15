// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from '../DrawerNavigation';
import LoginScreen from '../screens/Login';
import WelcomeScreen from '../screens/Welcome';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
                name="Welcome"
                options={{headerShown:false}}
                component={WelcomeScreen}
        /> 
          <Stack.Screen
                name="Login"
                options={{headerShown:true}}
                component={LoginScreen}
        /> 

        <Stack.Screen
                name="Drawer"
                options={{headerShown:false}}
                component={DrawerNavigation}
        /> 
         
            
      </Stack.Navigator> 
  );
}

export default AuthStack;