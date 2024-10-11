import { View, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
const profile = () => {
  return (
    <View className='flex flex-1 items-center justify-center'>
        
            <Text>My Profile Page</Text>
            <Link href="/">Go back to Home</Link>
         
    </View>
  )
}

export default profile