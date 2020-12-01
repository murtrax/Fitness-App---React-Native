import { Container, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Image, Dimensions } from 'react-native';
import Video1 from '../../assets/Video-thumbnail.jpg';
import Video2 from '../../assets/Video-thumbnail-2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Recommendations() {
	return (
		<Container style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.title}>Recommendations</Text>
				<Text style={styles.textMore}>More ></Text>
			</View>
			{/* <Container
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 10
				}}
			>
				<ScrollView 
				showsHorizontalScrollIndicator={false} 
				horizontal={true} 
				contentContainerStyle={{alignItems: 'center', width: '100%'}}
				>
				<ImageBackground  style={styles.imgBackground} resizeMode="cover" source={Video1} />
				<ImageBackground style={styles.imgBackground} resizeMode="cover" source={Video2} />
				</ScrollView> 
			</Container> */}
			<View style={{ flexDirection: 'row', flex: 1}}>
				<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
					<View
						style={{
							width: 180,
							height: 180,
							marginLeft: 20,

						}}
					>
						<Image style={styles.img} source={Video1} />
					</View>
					<View style={{
							width: 180,
							height: 180,
							marginLeft: 20,
						}}>
						<Image style={styles.img} source={Video2} />
					</View>
				</ScrollView>
			</View>
			<View style={styles.divider} />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#292D36',
		flex: 2.5,
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
	imgBackground: {
		width: `${windowWidth} * 60`,
		height: '100%',
		position: 'absolute',
		flex: 1
	},
	img: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		marginLeft: 0,
		marginTop: 'auto',
	},
	divider: {
		borderBottomColor: '#a9a9a9',
		borderBottomWidth: 0.5,
		paddingTop: '3%'
	}
});
