/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome5, Entypo, EvilIcons, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/Home/HomeScreen';
import AlbumScreen from '../screens/Album/AlbumScreen';

export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}} />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <Entypo name="home" color={color} size={30} style={{marginBottom: -3}} />,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => <EvilIcons name="search" color={color} size={30} style={{marginBottom: -3}} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={TabTwoScreen}
        options={{
          title: 'Library',
          tabBarIcon: ({color}) => <MaterialIcons name="library-music" color={color} size={30} style={{marginBottom: -3}} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoScreen}
        options={{
          title: 'Premium',
          tabBarIcon: ({color}) => <FontAwesome5 name="spotify" color={color} size={30} style={{marginBottom: -3}} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
