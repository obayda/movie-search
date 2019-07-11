import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Title, Container, Header, Body, Left, Spinner } from 'native-base';
import Footer from '../../Components/Footer';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5'
let noImage = 'https://uae.microless.com/cdn/no_image.jpg';

class Details extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('itemId', 'NO-ID');
        const url = 'http://api.tvmaze.com/shows/' + id;
        axios.get(url)
            .then(res => {
                this.setState({ data: res.data })
            });
    }

    render() {
        const { navigation } = this.props;
        let title = navigation.getParam('otherParam');
        const { data } = this.state;
        if (data.length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon size={30} color='white' name='arrow-left' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 22 }}>{title}</Title>
                    </Body>
                </Header>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={(data.image) ? { uri: data.image.medium } : { uri: noImage }}
                        />
                        <View style={styles.textView}>
                            <Text style={styles.textViewSize}>Show Rating : {(data.rating.average) ? data.rating.average : "Rating wasn't provided"}</Text>
                            <Text style={styles.textViewSize}>Genres : {data.genres.join(',')}</Text>
                            <Text style={styles.textViewSize}>Schedule : {data.schedule.days.join(',')} - {data.schedule.time}</Text>
                            <Text style={styles.textViewSize}>Network : {(data.network) ? data.network.name : null}</Text>
                            <Text style={styles.textViewSize}>Language : {data.language}</Text>
                            <Text style={styles.textViewSize}>Summary : {data.summary.replace(/<p>|<\/p\>|<b>|<\/b\>/gi, '')}</Text>
                        </View>
                    </View>
                </ScrollView>
                <Footer />
            </Container>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        fontSize: 20,
        margin: 5
    },
    scrollView: {
        marginBottom: '13%'
    }
});