import {View, Text} from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Card from '../components/Card';
const HomePage = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}>
      <Calendar
        theme={{
          backgroundColor: 'red',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#735BF2',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#fff',
          todayBackgroundColor: '#735BF2',
          dayTextColor: '#2d4150',
          textDisabledColor: 'gray',
        }}
        onDayPress={day => {
          console.log('selected day', day);
        }}
      />
      <View>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default HomePage;
