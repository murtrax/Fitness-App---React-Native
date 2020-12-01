import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Container, Text, Body, ListItem, Separator, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import Profile from './components/profile';
import Recommendations from './components/Recommendations';
import Workouts from './components/Workouts';
import Categories from './components/Categories';
import * as Font from 'expo-font';

const fetchFont = () => {
	return Font.loadAsync({
		poppins: require('./assets/fonts/Poppins-Medium.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFont}
				onError={() => console.log('Error')}
				onFinish={() => {
					setFontLoaded(true);
				}}
			/>
		);
	}
	return (
		<Container>
			<Container style={styles.container}>
				<NavBar />
				<Profile />
				<Categories />
				<Recommendations />
				<Workouts />
			</Container>
			<StatusBar style="auto" />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#292D36'
	},
	header: {
		backgroundColor: '#8F8E94'
	}
});
