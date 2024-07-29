import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OnBoarding = ({onComplete}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E5E5E5',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={styles.innerContainer}>
        <View style={styles.square}>
          <View style={styles.circle}>
            <View style={styles.innerCircle}></View>
          </View>
        </View>
        <Text style={styles.title}>Calender.io</Text>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.centerName}>Welcome Hamza!</Text>
      </View>
      <View style={styles.centerContainerMotto}>
        <Text style={styles.centerMotto}>It's Time to</Text>
        <Text style={styles.centerMotto}>Organize your Day!</Text>
      </View>
      <View style={styles.endContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.bgImage} source={require('../assets/bg.png')} />
          <Image
            style={styles.coverImage}
            source={require('../assets/cover.png')}
          />
          <TouchableOpacity
            onPress={onComplete}
            style={{
              position: 'absolute',
              bottom: 5,
              alignSelf: 'center',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="home" size={30} color="#8F9BB3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  centerName: {
    fontSize: 12,
    lineHeight: 14,
    color: '#01041D',
    fontWeight: '500',
  },
  centerMotto: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    color: '#222B45',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 43,
    marginHorizontal: 16,
  },
  centerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 46,
  },
  centerContainerMotto: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  endContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  bgImage: {
    width: '100%',
    height: '80%',
    position: 'absolute',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
