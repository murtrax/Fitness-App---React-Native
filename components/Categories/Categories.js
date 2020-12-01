import { StatusBar } from 'expo-status-bar';
import { Container, Text, Button } from 'native-base';
import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import categories from '../../assets/categories.jpg';

export default function Categories() {
	return (
		<Container style={styles.container}>
			<View
				style={{
					flex: 1,
					paddingTop: 0,
					padding: 20
				}}
			>
				<View style={{ flex: 2 }}>
					<ImageBackground style={styles.thumbnail} source={categories} imageStyle={{ borderRadius: 6 }}>
						<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
							<View style={styles.imageText}>
								<Text style={styles.title}>Combo Training</Text>
								<Text style={styles.infoText}>4 week program -min/day</Text>
							</View>
							<View style={{ marginLeft: 'auto', marginTop: 'auto' }}>
								{/* <Text style={styles.checkBtn}>Hello</Text> */}
								<Button rounded dark style={styles.checkBtn}>
									<Text style={styles.checkBtnText}>Check</Text>
								</Button>
							</View>
						</View>
					</ImageBackground>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.categoriesText}>Categories</Text>
						<Text style={styles.textMore}>More ></Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<Button rounded dark style={styles.categories}>
								<Text style={styles.checkBtnText}>Fitness</Text>
							</Button>
							<Button rounded dark style={styles.categories}>
								<Text style={styles.checkBtnText}>Workout Programs</Text>
							</Button>
							<Button rounded dark style={styles.categories}>
								<Text style={styles.checkBtnText}>Healthy Recipes</Text>
							</Button>
						</ScrollView>
					</View>
				</View>
				<View style={styles.divider} />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#292D36',
		flex: 3
	},
	thumbnail: {
		height: '100%',
		width: '100%'
	},
	imageText: {
		alignItems: 'flex-start',
		marginTop: 'auto',
		padding: 2,
		paddingLeft: 15,
		fontFamily: 'poppins'
	},
	title: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'poppins'
	},
	infoText: {
		color: 'white',
		fontSize: 12,
		fontFamily: 'poppins'
	},
	checkBtn: {
		backgroundColor: '#2C2C2E',
		marginBottom: 5,
		marginRight: 15,
		height: '50%'
	},
	checkBtnText: {
		color: 'white',
		fontFamily: 'poppins',
		fontSize: 12
	},
	categoriesText: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'poppins',
		marginTop: 15
	},
	categories: {
		marginTop: 15,
		backgroundColor: '#523DC5',
		height: '55%',
		marginRight: 10
	},
	divider: {
		borderBottomColor: '#a9a9a9',
		borderBottomWidth: 0.5,
		paddingTop: '10%'
	},
	textMore: {
		color: 'white',
		fontSize: 10,
		fontFamily: 'poppins',
		marginLeft: 'auto',
		marginTop: 18
	}
});
