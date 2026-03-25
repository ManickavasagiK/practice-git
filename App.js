import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailsScreen from "./src/DetailScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
     <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
   <Stack.Screen 
            name="Detail" 
            component={DetailsScreen} 
          />
  

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding:10
   
  },
  header: {
    height: 90,
    backgroundColor: '#DDA0DD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

});