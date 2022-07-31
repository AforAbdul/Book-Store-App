import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-web";
import { useState } from "react";

const Add = () => {
    const [addtitle, setAddtitle] = useState("");
    return (
        <View style={styles.container}>
            <Text> Add a New Task </Text>
            <br />
            <TextInput
                onChangeText={(val) => {
                    setAddtitle(val);
                }}
                placeholder="Select Cateogry"
                value={addtitle}
            ></TextInput>
            <br />
            <TextInput
                onChangeText={(val) => {
                    setAddtitle(val);
                }}
                placeholder="23/06/2022"
                value={addtitle}
            ></TextInput>
            <br />
            <Button title="Add Task" />


        </View >
    );
};
export default Add;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 100,
        borderWidth: 4,
        height: 100,




    },
    task: {

        flex: 1,
        margin: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    },

});
