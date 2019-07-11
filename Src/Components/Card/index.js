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
                <Text style={styles.text}>Rating: {(props.show.rating.average) ? props.show.rating.average : "No Rating"}</Text>
            </View>
        </View>
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
        marginBottom: 3
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