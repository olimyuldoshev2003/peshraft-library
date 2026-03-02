import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bookshelf from '@/screens/application/Bookshelf';
import ReceivedBook from '@/screens/application/ReceivedBook';

const StackNavigatorBookshelfPage = () => {
 
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bookshelf" component={Bookshelf} />
      <Stack.Screen name="ReceivedBook" component={ReceivedBook} />
    </Stack.Navigator>
  )
}

export default StackNavigatorBookshelfPage

const styles = StyleSheet.create({})