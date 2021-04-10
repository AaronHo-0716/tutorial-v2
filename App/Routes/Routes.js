import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Homescreen';
import SecondScreen from '../Screens/SecondScreen';

const Stack = createStackNavigator()
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='Second'
                    component={SecondScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})