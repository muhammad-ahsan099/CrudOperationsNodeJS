/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import { Provider } from 'react-redux';
 import store from './src/config/Store';
 import Student from './src/components/students/Student';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 
 
 const App = () => {
   
   return (
     <Provider store={store}>
     <SafeAreaView  style={styles.container} >
         <Student/>
     </SafeAreaView>
      </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 
   
 
 });
 
 export default App;
 