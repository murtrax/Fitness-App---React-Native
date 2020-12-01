import { Container, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import bell from '../../assets/bell.png';
import pin from '../../assets/pin.png';
import onlineCircle from '../../assets/onlineCircle.png';
import profile from '../../assets/profile.jpg';

export default function Profile() {
	return (
		<Container
			style={{
				flex: 1.1,
				backgroundColor: '#292D36'
			}}
		>
			<View style={{ flex: 1 }}>
				<View style={styles.container}>
					<Thumbnail style={styles.profilePicture} square source={profile} />
					<View>
						<Text style={styles.profileName}>Elizabeth</Text>
						<View style={styles.locationInfo}>
							<Thumbnail style={styles.pinPicture} square source={pin} />
							<Text style={styles.locationText}>New York</Text>
							<View />
						</View>
					</View>
					<View style={styles.BellView}>
						<Thumbnail style={styles.Bell} square source={bell} />
					</View>
				</View>
				<View
					style={styles.divider}
				/>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		height: '20%',
		alignItems: 'flex-start',
		backgroundColor: '#292D36'
	},
	profilePicture: {
		borderRadius: 10,
		height: 40,
		width: 40,
		marginLeft: 20,
		marginTop: 10
	},
	pinPicture: {
		marginTop: 5,
		height: 10,
		width: 7
	},
	profileName: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 14,
		marginLeft: 10,
		marginTop: 10,
		fontFamily: 'poppins'
	},
	locationInfo: {
		flexDirection: 'row',
		marginTop: 1,
		marginLeft: 10
	},
	locationText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 13,
		marginLeft: 6,
		fontFamily: 'poppins'
	},
	BellView: {
		flex: 1
	},
	Bell: {
		height: 20,
		width: 18,
		marginTop: 23,
		marginLeft: 'auto',
		marginRight: 30
    },
    divider: {
		borderBottomColor: '#a9a9a9',
		borderBottomWidth: 0.5,
        margin:10,
        paddingTop: "12%",
    },
});
