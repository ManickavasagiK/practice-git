import React from 'react';

import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import { universities } from '../data/universities';

export default function HomeScreen({navigation}) {

  const renderItem = ({ item }) => (
    <TouchableOpacity
 
    onPress={() => navigation.navigate('Detail', { university: item })}
  >
    <View style={styles.card}>
      <Text style={styles.titleCards}>{item.university}</Text>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Explore Universities</Text>
      </View>
      <View>
      <FlatList
        data={universities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
       
      />
    </View>

      
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
    paddingTop: 10,
    marginBottom:10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    paddingTop:10,
    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
     marginLeft:10,
     marginRight:10,
    // Elevation (Android)
    elevation: 3,
  },
  titleCards: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"#800080"
  },
  country: {
    fontSize: 14,
    color: '#720e9e',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});
