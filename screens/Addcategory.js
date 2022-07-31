import React ,{useState} from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet, Text, View,TextInput,Button,ScrollView,FlatList } from 'react-native';

export default function AddCategory() 
{
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const newtext =(addedtext)=>{
    setText(addedtext);
  };

  const click=()=>{
    setTextList([...textList, text]);
    setText('');
  }

    return (
    <View style={styles.container}>
     
     <Text style={{ padding:15,textAlign:"center",fontSize:20 ,fontweight:'bold',color:"white",backgroundColor:"blue",}}>Add New Category</Text>
      <Text style={{ padding:10}}> </Text>
     
     <Text style={{ padding:15,fontSize:20 ,fontweight:'bold',color:"blue"}}> Category Name</Text>

      <TextInput 
       style={{
    
    borderWidth:3,
    color:'blue',
    height:50,
    padding:15,
    backgroundColor:'white',

   
    fontSize:18
       }} 
      placeholder='Enter new text here!' 
      onChangeText={newtext} 
      value={text} />
      
      
      <Text style={{ padding:15}}> </Text>
      
      <Button
        title="Save Category"
        color="blue"
        onPress={click} 
      />
      
      
      <View >
      <Text style={{padding:10,textAlign:'left',fontSize:20 ,fontweight:'bold',color:"BLUE",}}>Categories Added</Text>
      

      <FlatList 
            data={textList}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=><View>
              <Text >
             Category is:
              {item}
              </Text>
              </View>}
              />
            
          
     </View>
      
    </View>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80CEEE',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    padding:30,
    

    
  },
  
 textb:
 {
  backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    color:'blue',
    height:70,
    padding:14,
    width:300
 },
 textf:
 {
  backgroundColor: 'white',

    borderWidth:3,
    padding:20,
    width:300
 }
});




