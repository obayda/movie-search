import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import axios from 'axios';
let noImage = 'https://uae.microless.com/cdn/no_image.jpg';

class Details extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('itemId', 'NO-ID');
        const url = 'http://api.tvmaze.com/shows/' + id;
        axios.get(url)
            .then(res => {
                this.setState({ data: res.data })
            });
    }
    render() {
        const { image, rating, summary, genres, schedule, network, language } = this.state.data;
        if (!this.state.data) {
            return (
                <View>
                    <Text>Lodaing...</Text>
                </View>
            )
        }
        return (
            <View>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={(image) ? { uri: image.medium } : { uri: noImage }}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textViewSize}>
                        </Text>
                        <Text style={styles.textViewSize}>{genres}</Text>
                        <Text style={styles.textViewSize}>{summary}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e1e5ed',
    },
    image: {
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 10
    },
    title: {
        marginTop: 20,
        fontSize: 28,
        textAlign: 'center'
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        width: 350,
        marginTop: 20,
    },
    textViewSize: {
        fontSize: 20
    }
});