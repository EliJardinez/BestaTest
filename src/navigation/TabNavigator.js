import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ExploreScreen from '../screens/Explore';
import CameraScreen from '../screens/Camera';
import AccountScreen from '../screens/Account';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explora') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Mis vehículos') {
            iconName = focused ? 'home' : 'qr-code-outline';
          } else if (route.name === 'Cuenta') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6B7280',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explora" component={ExploreScreen} />
      <Tab.Screen name="Mis vehículos" component={CameraScreen} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
}
