import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View
      style={{
        display: 'flex',
        marginHorizontal: 17,
        marginVertical: 20,
        flexDirection: 'column',
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text>Cirlce</Text>
        <Text style={{marginLeft: 10}}>Time</Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: 16,
          color: '#222B45',
        }}>
        Design new UX
      </Text>
      <Text>Cirlce</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
