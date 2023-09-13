import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Screens Import
import Header from './src/Header';
import Navigation from './src/Navigation';

//const Taps = NavigationContainer();


export default function App() {
  return (
   <NavigationContainer>
      <View style={styles.container}>
        <StatusBar 
        backgroundColor='#0e806a' 
        barStyle='light-content'
        />

        <Header/>

        <View style={{flex:1, backgroundColor:'#fff'}}>
          <Navigation/>
        </View>

      </View>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
