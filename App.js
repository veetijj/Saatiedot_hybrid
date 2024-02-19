import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';


export default function App() {
  return (
   <View style={styles.container}>
    <Text style={styles.heading}>Current Weather</Text>
    <Position style={styles.position}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  heading: {
    color: 'black'
  }, 
  position: {
    color:'black'
  }
});