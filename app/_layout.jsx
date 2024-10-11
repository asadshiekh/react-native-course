
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import {Slot,Stack,SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font';
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  // return (
  //   <View style={styles.container}>
  //     {/* <Text>RootLayout</Text> */}
  //     <>
  //     <Text>Header</Text>
  //     <Slot></Slot>
  //     <Text>Footer</Text>
  //     </>
      
  //   </View>
  // );

  const [fontsLoaded,error] =useFonts({
    "Roboto-Bold":require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium":require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular":require("../assets/fonts/Roboto-Regular.ttf"),
  })

useEffect(() =>{
  if(error) throw error;
  if(fontsLoaded) SplashScreen.hideAsync();
},[fontsLoaded,error])

if(!fontsLoaded && !error) return null;


  return(
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:true}}></Stack.Screen>
      </Stack>
    </>
  )

};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',  // Fixed the typo
    justifyContent: 'center',
  },
});
