
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Expense from './Expense';
import Addcategory from './Addcategory';
import AddExpense from './AddExpense';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
export default function Dash() {
  return (
    <>

    <Tab.Navigator
      initialRouteName="paper"
      activeColor="#000000"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#694fad' }}
     
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
    
        }}
      />
  
      <Tab.Screen
        name="expense"
        component={Expense}
        options={{
          tabBarLabel: 'Expense'
        }}
        
      />
      <Tab.Screen
        name="Addcategory"
        component={Addcategory}
        options={{
          tabBarLabel: 'Add Category'
       
        }}
      />
  
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarLabel: 'Add Expense'
        }}
        />
    </Tab.Navigator>
  

    </>
  );
}

