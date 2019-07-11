import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
let noImage = 'https://uae.microless.com/cdn/no_image.jpg';

const Card = (props) => {
    return (
        <View style={styles.movie}>
            <Image
                style={styles.image}
                source={(props.show.image) ? { uri: props.show.image.medium } : { uri: noImage }}
            />
            <View style={styles.data}>
                <Text style={styles.text}>Title: {props.show.name}</Text>
                <Text style={styles.text}>Premiered: {(props.show.premiered) ? props.show.premiered.split('-')[0] : "Year wansn't provided"}</Text>
                <Text style={styles.text}>Rating: {(props.show.rating.average) ? props.show.rating.average : "No Rating"}</Text>
            </View>
        </View >
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5
    },
    movie: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        borderBottomColor: '#c8cbcf',
        borderBottomWidth: 2
    },
    data: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: 'green'
    },
    flatList: {
        height: '90%'
    }
});