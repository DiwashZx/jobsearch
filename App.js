import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,  } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ImageScreen from './src/screens/ImageScreen';
 


export default function App() {



  return (
    <ImageScreen />
    // <WelcomeScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
