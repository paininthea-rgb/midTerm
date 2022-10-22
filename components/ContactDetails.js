import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactListItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 6,
        color: '#030436',
        backgroundColor: '#e1e7e9',
        borderColor: '#030436',
        borderWidth: 1
    }
})

export default ContactListItem;