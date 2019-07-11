import React, { Component, Fragment } from "react";
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { Title, Right, Left, Container, Header, Item, Body, Button, Input, Content } from 'native-base';
import axios from 'axios';
import Card from '../../Components/Card'
import Icon from 'react-native-vector-icons/Fontisto'
import Footer from '../../Components/Footer'

class Main extends Component {
    state = {
        data: [],
        value: '',
        flag: false,
        searchToggle: false
    }

    getData = () => {
        const query = this.state.value;
        const url = 'http://api.tvmaze.com/search/shows?q=' + query;
        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data,
                    flag: true,
                    value: ''
                })
            });
    }

    moreDetails = (id, title) => {
        this.props.navigation.navigate('Details', {
            itemId: id,
            otherParam: title
        });
    }

    keyExtractor = (item) => item.show.id.toString();

    renderItem = (show) => {
        const { item } = show;
        return (
            <TouchableOpacity onPress={() => this.moreDetails(item.show.id, item.show.name)}>
                <Card {...item} />
            </TouchableOpacity>
        );
    }

    render() {
        const { data, flag, searchToggle } = this.state;
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }} />
                    <Left />
                    <Body>
                        <Title>Search</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.setState({ searchToggle: true })}>
                            {searchToggle ? null : <Icon size={30} name="search" />}
                        </TouchableOpacity>
                    </Right>
                </Header>
                {
                    searchToggle ? <Header searchBar rounded>
                        <Item>
                            <Input
                                defaultValue={this.state.value}
                                onChangeText={text => this.setState({ value: text })}
                                placeholder="Search By Show Name..."
                            />
                            <TouchableOpacity onPress={() => this.getData()}>
                                <Icon size={30} name="search" />
                            </TouchableOpacity>
                        </Item>
                    </Header> : null
                }
                <Content>
                    {
                        flag
                            ?
                            (!data.length ? <Text style={styles.text}>No shows were found</Text> : null)
                            :
                            <Text style={[styles.textMargin, styles.text]}>Click the search icon <Icon size={22} name="search" /> to {searchToggle ? 'search' : 'start'}</Text>
                    }
                    <FlatList
                        style={styles.flatList}
                        data={data}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </Content>
                <Footer />
            </Container>
        );
    }
}
export default Main;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 22
    },
    flatList: {
        marginBottom: '13%'
    },
    textMargin: {
        marginTop: '5%',
    }
});