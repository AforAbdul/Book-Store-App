import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-web";

const TodaysTasks = () => {
    let tasks = [
        {
            title: "Wake Up",
            description: "Wake up early in the morning",
        },
        {
            title: "breakfast",
            description: "Eat your breakfast",

        },
        {
            title: "University",
            description: "Go to university",
        },
    ];
    const [addtitle, setAddtitle] = useState("");
    const [adddescription, setAdddescription] = useState("");

    return (
        <View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={styles.title}>Title: {item.title}</Text>
                            <Text style={styles.description}>
                                description: {item.description}
                            </Text>
                        </View>
                    );
                }}
            />
            <View>
                <br />
                <TextInput
                    onChangeText={(val) => {
                        setAddtitle(val);
                    }}
                    placeholder="Title"
                    value={addtitle}
                ></TextInput>
                <br />
                <TextInput
                    onChangeText={(val) => {
                        setAdddescription(val);
                    }}
                    placeholder="Description"
                    value={adddescription}
                ></TextInput>
                <br />
                <Button
                    title="Save Data"
                    onPress={() => {
                        tasks.push({ title: addtitle, description: adddescription });
                        console.log(tasks);
                    }}
                ></Button>
            </View>
        </View>
    );
};

export default TodaysTasks;

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
    },
});