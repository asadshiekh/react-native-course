import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Import the icon set

const TabsLayout = () => {
  return (
    <>
      <Tabs>
 
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color }) => ( // Remove size prop from here
              <MaterialIcons
                name="person"
                color={color}
                size={25} // Set the icon size here (e.g., 30)
              />
            ),
            tabBarLabelStyle: {
              fontSize: 13,
            
            },
            tabBarActiveTintColor: '#FF6347', // Customize active color
            tabBarInactiveTintColor: '#A9A9A9', // Customize inactive color
          }}
        />
               <Tabs.Screen 
          name="orders"
          options={{
            title: 'Orders',
            headerShown: false,
            tabBarIcon: ({ color }) => ( // Remove size prop from here
              <MaterialIcons
                name="shopping-cart" 
                color={color}
                size={25} // Set the icon size here (e.g., 30)
              />              
            ),
            tabBarLabelStyle: {
              fontSize: 13,
            
            },
            tabBarActiveTintColor: '#FF6347', // Customize active color
            tabBarInactiveTintColor: '#A9A9A9', // Customize inactive color
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
