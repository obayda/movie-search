import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    TextInput
} from "react-native";
import axios from 'axios';
import Card from '../../Components/Card'
import Icon from 'react-native-vector-icons/Octicons'
import SearchBar from '../../Components/SearchBar'

class Main extends Component {
    state = {
        data: [],
        value: 'girls'
    }

    getData = () => {
        const query = this.state.value;
        const url = 'http://api.tvmaze.com/search/shows?q=' + query;
        axios.get(url)
            .then(res => {
                this.setState({ data: res.data })
            });
    }

    moreDetails = (id) => {
        this.props.navigation.navigate('Details', {
            itemId: id
        });
    }

    keyExtractor = (item) => item.show.id.toString();

    renderItem = (show) => {
        const { item } = show;
        return (
            <TouchableOpacity onPress={() => this.moreDetails(item.show.id)}>
                <Card {...item} />
            </TouchableOpacity>
        );
    }

    render() {
        const { data } = this.state;
        return (
            <View>
                <View style={{ backgroundColor: '#356859', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <SearchBar
                        defaultValue={this.state.value}
                        styles={{ width: '120%', borderRadius: 10, backgroundColor: 'white', fontSize: 30 }}
                        onChangeText={text => this.setState({ value: text })}
                        placeholder="Search By Show Name..."
                    />
                    <TouchableOpacity onPress={() => this.getData()}>
                        <Icon style={{ padding: 11, backgroundColor: '#356859', color: 'white' }} name="search" size={45} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ height: '90%' }}
                    data={data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
export default Main;