// App.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import OnBoarding from './screens/OnBoarding';
import HomePage from './screens/HomePage';
import SplashScreen from './screens/SplashScreen';
import {useSelector, useDispatch} from 'react-redux';
import {launched, notLaunched, selectBoarding} from './redux/boardingSlice';

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

const MainComponent = () => {
  const dispatch = useDispatch();
  const boardedStatus = useSelector(selectBoarding);
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const checkBoardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('launched');
        if (value !== null) {
          dispatch(launched());
        } else {
          dispatch(notLaunched());
        }
      } catch (e) {
        console.error(e);
      }
    };

    const splashAndCheck = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Splash screen delay of 2 seconds
      await checkBoardingStatus();
      setSplashVisible(false);
    };

    splashAndCheck();
  }, [dispatch]);

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('launched', 'true');
      dispatch(launched());
    } catch (e) {
      console.error(e);
    }
  };

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <View style={{flex: 1}}>
      {boardedStatus ? (
        <HomePage />
      ) : (
        <OnBoarding onComplete={handleOnboardingComplete} />
      )}
    </View>
  );
};

export default App;
