import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Octicons'

const Search = (props) => {
    const { onChangeText, defaultValue, styles, placeholder } = props;
    return (
        <View style={{ padding: 5, marginBottom: 2, backgroundColor: '#356859' }}>
            <TextInput onChangeText={onChangeText} defaultValue={defaultValue} style={styles} placeholder={placeholder} />
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});