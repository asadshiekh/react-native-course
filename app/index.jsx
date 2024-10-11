import { Image,ScrollView,View, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';

const index = () => {
  return (
      <SafeAreaView className="h-full">
          <ScrollView contentContainerStyle={{height:'100%'}}>
            <View className="w-full justify-center items-center h-full px-5">
              <Image
               source={require('../assets/images/driver-app.png')} // Correctly use require for local images
               className="w-[120px] h-[100px]"
              />
            </View>
          </ScrollView>
      </SafeAreaView>
  )
}

export default index