// SplashScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.square}>
          <View style={styles.circle}>
            <View style={styles.innerCircle}></View>
          </View>
        </View>
        <Text style={styles.title}>Calender.io</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  square: {
    width: 26,
    height: 26,
    backgroundColor: '#735BF2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 12.86,
    height: 12.86,
    borderRadius: 12.86 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 5.44,
    height: 5.44,
    borderRadius: 5.44 / 2,
    backgroundColor: '#735BF2',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
