import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Text, Container, Footer, FooterTab, Button } from 'native-base';

class AppFooter extends Component {
    render() {
        return (
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button>
                        <Text>Obaydah</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default AppFooter;

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
});