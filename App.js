import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Compte from './components/Compte';
import Accueil from './components/Accueil';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';


const Tab= createBottomTabNavigator();

export default function App() {

  return (
      
      <NavigationContainer>

    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Connexion') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Inscription') {
              iconName = focused ? 'person-add' : 'person-add-outline';
            } else if (route.name === 'Compte') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Inscription" component={Inscription} />
      <Tab.Screen name="Connexion" component={Connexion} />
      <Tab.Screen name="Compte" component={Compte} />
      </Tab.Navigator>
    </NavigationContainer>     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});