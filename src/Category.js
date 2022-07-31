import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Category = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Home Category");
    const [date, setDate] = useState("23/06/2022");
    const [addTask, setAddTask] = useState([]);
    return (
        <View style={styles.container}>
            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30 }}> Category</Text>
            <br />
            <TextInput
                style={styles.box}
                onChangeText={(val) => {
                    setName(val);
                }}
                placeholder="category name"
            ></TextInput>
            <Text>{category}</Text>
            <Text>{date}</Text>
            <br />
            <Button
                title="Save Category"
                onPress={() => {
                    setAddTask([
                        { NAME: name, CATEGORY: category, date: date },
                        ...addTask,
                    ]);
                    console.log(addTask);
                }}
            ></Button>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        margin: 10,
    },
    box: {
        padding: 10,
        borderWidth: 2,
    },
});
