import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SecondScreen(props) {
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
        justifyContent: 'center',
        alignItems: 'center'
    }
})