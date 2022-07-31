import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Button } from "react-native-web";

const Home = () => {
    return (
        <View style={styles.container}>

            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 30, }}> Expense Tracker</Text>
            <View style={styles.task}>
                <TouchableOpacity>
                    <Text> Today's Task </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Category wise Task </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Category wise Task </Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text> Add New Task </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default Home;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 100,
        padding: 100,
    },
    task: {

        flex: 1,
        margin: 10,
        backgroundColor: '#FF8A33',
        textShadowColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,

    },

});
