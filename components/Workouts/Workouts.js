import { StatusBar } from 'expo-status-bar';
import { Container, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Workout1 from '../../assets/workout-1.jpg';
import Workout2 from '../../assets/workout-2.jpg';
import { Entypo } from '@expo/vector-icons';

export default function Workouts() {
	return (
		<Container style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.title}>Workouts & Programs</Text>
				<Text style={styles.textMore}>More ></Text>
			</View>
			<View>
				<View style={styles.post}>
					<Thumbnail style={styles.thumbnail} square source={Workout1} />
					<View>
						<Text style={styles.postTitle}>
							Functional Upper Body Strength Workout Dynamic Irregular Strength Training
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Entypo name="stopwatch" size={12} color="white" style={{ paddingLeft: 10 }} />
							<Text style={styles.postInfo}>40 min   |   4/5 hard   |   203-382 calories burn</Text>
						</View>
					</View>
				</View>
				<View style={styles.dividerPost} />
				<View style={styles.post}>
					<Thumbnail style={styles.thumbnail} square source={Workout2} />
					<View>
						<Text style={styles.postTitle}>
							Resistance Band Workout for Butt and Thighs - 10 Minute Lower Body Training
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Entypo name="stopwatch" size={12} color="white" style={{ paddingLeft: 10 }} />
							<Text style={styles.postInfo}>10 min   |   3/5 hard   |   64-118 calories burn</Text>
						</View>
					</View>
				</View>
				<View style={styles.dividerPost} />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#292D36',
		flex: 4,
		padding: 20,
		paddingTop: 0
	},
	title: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'poppins'
	},
	textMore: {
		color: 'white',
		fontSize: 10,
		fontFamily: 'poppins',
		marginLeft: 'auto'
	},
	post: {
		marginTop: 6,
		marginBottom: 6,
		flexDirection: 'row'
	},
	postTitle: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'poppins',
		padding: 10,
		width: '50%'
	},
	postInfo: {
		fontSize: 9,
		color: 'white',
		fontFamily: 'poppins',
		paddingLeft: 5,
		width: '50%'
	},
	thumbnail: {
		borderRadius: 12,
		height: 70,
		width: 70,
		marginLeft: 10,
		marginTop: 10
	},
	dividerPost: {
		marginLeft: 90,
		borderBottomColor: '#a9a9a9',
		borderBottomWidth: 0.5,
		paddingTop: '3%'
	}
});
