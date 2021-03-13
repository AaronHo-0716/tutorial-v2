import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const FirstComponent = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.text}</Text>
        </View>
    )
}

export default FirstComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });