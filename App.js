import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Homescreen</Text>
      <Text style={styles.textStyles}>Click Amelia to go to the next screen</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Second')
      }}>
        <Image source={require('./assets/amelia.jpg')} />
      </TouchableOpacity>
      <Text>This is a test message for GitHub</Text>
      <Text>Jiahui do you read</Text>
    </View>
  )
}

function Secondscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Secondscreen</Text>
      <Button
        title='Go to third screen'
        onPress={() => {
          navigation.navigate('Third')
        }}
      />
    </View>
  )
}

function Thirdscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Thirdscreen</Text>
      <Button
        title='Go back homescreen'
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Homescreen}
        />
        <Stack.Screen
          name='Second'
          component={Secondscreen}
        />
        <Stack.Screen
          name='Third'
          component={Thirdscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    color: '#f5f064',
    fontSize: 20
  }
});
