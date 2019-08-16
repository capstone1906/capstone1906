import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

export default function AuthHomeScreen(props) {
  const navigate = props.navigation.navigate;
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/trail-in-the-woods.jpg')}
      blurRadius={2}
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/robot-dev.png')}
              style={styles.welcomeImage}
            />
            <Text style={styles.name}>Wellness Tracker</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate('UserJoin')}>
              <View style={styles.joinSignIn}>
                <Text style={styles.buttonText}>Join Now </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ExistingUser')}>
              <View style={styles.joinSignIn}>
                <Text style={styles.buttonText}>Existing Users </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

AuthHomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 100,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  joinSignIn: {
    alignItems: 'center',
    backgroundColor: 'rgb(200,200,200)',
    borderRadius: 205,
    margin: 30,
  },
  buttonText: {
    fontSize: 25,
    color: '#2e78b7',
    margin: 20,
  },
  name: {
    fontSize: 40,
    paddingBottom: 50,
    paddingTop: 30,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});