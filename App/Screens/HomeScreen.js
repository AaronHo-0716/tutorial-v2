import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the first screen</Text>
            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => { navigation.navigate('Second') }}
                >
                    <Text>继续看下去吧</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#d62828',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 6,
    }
})