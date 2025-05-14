/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth Screens
import SplashScreen from './src/screens/SplashScreen';
import LangScreenOne from './src/screens/auth/LangSelect_1';
import LangScreenTwo from './src/screens/auth/LangSelect_2';
import LangScreenThree from './src/screens/auth/LangSelect_3';
import LoginScreenOne from './src/screens/auth/LoginScreen1';
import RegisterScreenOne from './src/screens/auth/RegisterPage1';

// Main Screens
import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPassword';
import MatchesScreen from './src/screens/MatchesScreen';
import CustomTabBar from './src/components/CustomTabBar';

// Business List Screen
import BusinessSearchScreen from './src/screens/BusinessListing/BusinessSearchScreen';
import BusinessListDetailsScreen from './src/screens/BusinessListing/BusinessListDetails';
import BusinessListScreen from './src/screens/BusinessListing/BusinessListScreen';

export type MainTabParamList = {
  Home: undefined;
  Matches: undefined;
  Explore: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Tabs visible only in main app
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Lang1" component={LangScreenOne} />
        <Stack.Screen name="Lang2" component={LangScreenTwo} />
        <Stack.Screen name="Lang3" component={LangScreenThree} />

        {/* Login Screens */}
        <Stack.Screen name="Login1" component={LoginScreenOne} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />

        {/* Register Screens */}
        <Stack.Screen name="Register1" component={RegisterScreenOne} />

        {/* Main Pages */}
        <Stack.Screen name="Home" component={MainTabs} />
        {/* <Stack.Screen name="Home" component={MainTabs} /> */}
        <Stack.Screen name="BusinessSearchScreen" component={BusinessSearchScreen} />
        <Stack.Screen name="BusinessListScreen" component={BusinessListScreen} />
        <Stack.Screen name="BusinessListDetailsScreen" component={BusinessListDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
