import {React,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  BackHandler

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
const DetailsScreen = ({ route, navigation }) => {
  const { university } = route.params;
//console.log("items",university)
useEffect(() => {
  const backAction = () => {
    navigation.goBack();   // 👈 go to previous screen
    return true;           // 👈 prevent default behavior
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  );

  return () => backHandler.remove(); // cleanup
}, []);

  return (
 
      
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

  {/* Header */}
  <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#DDA0DD',
    

  }}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:20}}>
      <Ionicons name="chevron-back" size={28} color="#fff" />
    </TouchableOpacity>

    <Text style={{
   
   marginTop:20,
   marginLeft:20,
    
     color: '#fff',
     fontSize: 20,
     fontWeight: 'bold'
      
   
      
    }}>
      Details of {university.university}
    </Text>
  </View>
  {/* Content */}
  <ScrollView>
<View style={{margin:10}}>
{/* University Image */}
<Image
  source={{ uri: university.image }}
  style={{
    width: '100%',
    height: 200
  }}
/>

<View style={{ padding: 15 }}>

  {/* University Name */}
  <Text style={{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  }}>
    {university.university}
  </Text>

  {/* Country */}
  <Text style={{
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  }}>
    {university.country}
  </Text>

  {/* Description */}
  <Text style={{
    fontSize: 15,
    lineHeight: 22
  }}>
    {university.description1}
  </Text>

  {/* Courses */}
  <Text style={{
    marginTop: 15,
    fontWeight: 'bold'
  }}>
    Courses:
  </Text>

  <Text>
    {university.popularCourses?.join(', ') || 'No data'}
  </Text>



  {/* Ranking */}
  <Text style={{
    marginTop: 15,
    fontWeight: 'bold'
  }}>
    Ranking:
  </Text>

  <Text>
    {university.ranking?university.ranking: 'No data'}
  </Text>

    {/* acceptanceRate */}
    <Text style={{
    marginTop: 15,
    fontWeight: 'bold'
  }}>
    AcceptanceRate:
  </Text>

  <Text>
    {university.acceptanceRate?university.acceptanceRate: 'No data'}
  </Text>
   {/* tuitionFees */}
   <Text style={{
    marginTop: 15,
    fontWeight: 'bold'
  }}>
    TuitionFees:
  </Text>

  <Text>
    {university.tuitionFees?university.tuitionFees: 'No data'}
  </Text>

  
   {/* website */}
   <Text style={{
    marginTop: 15,
    fontWeight: 'bold'
  }}>
    Website:
  </Text>

  <Text>
    {university.website?university.website: 'No data'}
  </Text>



</View>
</View>
</ScrollView>



</View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6200EE',
  },
  back: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 15,
  },
  country: {
    marginHorizontal: 15,
    color: '#6200EE',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    lineHeight: 22,
    color: '#555',
  },

  button: {
    backgroundColor: '#6200EE',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});