import { View, Text, Pressable,StyleSheet,Image } from 'react-native'
import React from 'react';

// const categories = [
//     {
//         id: 1,
//         img: require('../../assets/images/call-center.png'),
//         heading: 'Service',
//         paragraph: 'Lorem Ipsum is simply dummy text',
//         backgroundColor: '#F6AFB0',
//     },
//     {
//         id: 2,
//         img: require('../../assets/images/lightning.png'),
//         heading: 'Electricity',
//         paragraph: 'Lorem Ipsum is simply dummy text',
//         backgroundColor: '#8ECC81',
        
//     },
//     {
//         id: 3,
//         img: require('../../assets/images/piggy-bank.png'),
//         heading: 'Savings',
//         paragraph: 'Lorem Ipsum is simply dummy text',
//         backgroundColor: '#80CEEE',
//     },
//     {
//         id: 4,
//         img: require('../../assets/images/shopping.png'),
//         heading: 'Shopping',
//         paragraph: 'Lorem Ipsum is simply dummy text',
//         backgroundColor: '#ffe4b5',
//     },
//     {
//         id: 5,
//         img: require('../../assets/images/food.png'),
//         heading: 'Food',
//         paragraph: 'Lorem Ipsum is simply dummy text',
//         backgroundColor: '#dda0dd',
//     }
// ];



const Expense = ({navigation}) => {
    return (
          <View style={styles.container}>
          <Text style={{padding:10,textAlign:'center',fontSize:20 ,fontweight:'bold',color:"BLUE",}}>ALL SPENDING CATEGORIES</Text>
      
        
            <Text style={styles.text_style}></Text>
            
            <View style={{backgroundColor:'#F6AFB0'}}>
            <TouchableOpacity onPress={() => onPress(press)}>
            <Image
              style={styles.logo}
              source={{
                uri: require('../assets/food.png'),
              }}
            />
            <Text style={styles.text_style}>Food</Text>
            <Text style={styles.text_style}>$120,000 spent</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{backgroundColor:'#ffe4b5'}}>
            <TouchableOpacity onPress={() => onPress(press)}>
            <Image
              style={styles.logo}
              source={{
                uri: require('../assets/piggy-bank.png'),
              }}
            />
            <Text style={styles.text_style}>Savings</Text>
            <Text style={styles.text_style}>$23,00 spent</Text>
            </TouchableOpacity>
            </View>

       
          </View>
      
        
    )
  }
  const styles = StyleSheet.create({
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "",
      },
      text_style: {
        fontSize: 20,
        fontWeight: 500,
        padding: 4,
      },
      logo: {
        borderRadius: "25%",
        width: 45,
        height: 45,
      },
    });
  export default Expense