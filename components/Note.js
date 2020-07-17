import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
const AddNotes = ({ addItem }) => {
    const [text, setText] = React.useState('');
    const onChange = textValue => setText(textValue)
    return (
        <View>
            <TextInput placeholder="Add projects"
                style={styles.textInput}
                onChangeText={onChange}

            >

            </TextInput>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btntext}>
                    <Icon name="plus" size={20} />
                     New Project
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        padding: 9,
        margin: 5,
        backgroundColor: 'white',
    },
    btntext: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }

})
export default AddNotes;