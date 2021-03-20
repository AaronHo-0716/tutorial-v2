import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SecondScreen from "../Screens/SecondScreen";

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: () => null
            }}>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Second"
                    component={SecondScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};