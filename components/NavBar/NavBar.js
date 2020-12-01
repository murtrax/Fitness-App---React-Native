import { StatusBar } from 'expo-status-bar';
import { Container, Header, } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function NavBar() {
	return (
		<Container style={{flex: 0.5}}>
			<Header style={styles.header} >
			</Header>
			<StatusBar style="auto" />
		</Container>
	);
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8F8E94',
  }
});
