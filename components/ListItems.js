import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
const ListItems = ({ item, deletItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.text}>{item.text}</Text>
                <Icon name="check-circle" size={20} color="aqua" onPress={() => deletItem(item.id)} />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderBottomColor:'aqua',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
    }
})
export default ListItems;