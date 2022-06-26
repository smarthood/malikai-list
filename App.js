import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView ,TextInput, ScrollView} from 'react-native';
import Data from './Data';

export default function App() {
  const [item,setItem]=useState(Data);
  const [keyword,setKeyword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TextInput
        style={styles.input}
        onChangeText={setKeyword}
        placeholder="search..."
      />
      </View>
      <Text style={styles.a}>No of items: {item.length}</Text>
      <View style={styles.title}>
        <Text>Product</Text>
        <Text>Quantity</Text>
        <Text>Price</Text>
      </View>
      <ScrollView>
      {item.filter((items)=>{
        if(keyword === ""){
          return items;
        }
        else if (items.name.toLowerCase().includes(keyword.toLowerCase())){
          return items;
        }
      }).map((items,key)=>{
        const {name,id,quantity,price}=items;
        return (
          <View style={styles.card}>
            <Text style={{color: '#fff', fontSize: 18}}>{name}</Text>
            <Text style={{color: '#fff', fontSize: 18}}>{quantity}</Text>
            <Text style={{color: '#fff', fontSize: 18}}>₹{price}</Text>
            </View>
        )})}
        </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  title:{
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 80,
    backgroundColor: 'orange',
  },
  input: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 40,
    width: 300,
    paddingLeft: 3,
  },
  a:{
    fontSize: 30,
  },
  card: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'dodgerblue',
    marginHorizontal: 30,
    padding: 20,
    textTransform: 'capitalize',
    marginVertical: 15,
  }
});
