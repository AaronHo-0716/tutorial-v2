import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

function SecondScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the second screen</Text>
        </View>
    );
}

export default SecondScreen;

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
})