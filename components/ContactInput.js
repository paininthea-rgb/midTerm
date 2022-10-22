import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const ContactInput = props => {
    const [enteredContactName, setContactName] = useState();
    const [enteredContactInfo, setContactInfo] = useState();

    const ContactNameHandler = (name) => {
        setContactName(name);
    }

    const ContactInfoHandler = (info) => {
        setContactInfo(info);
    }

    const addItemHandler = () => {
        props.onAddItem(enteredContactName, enteredContactInfo);
        setContactName('');
        setContactInfo('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Your Name" style={styles.input} onChangeText={ContactNameHandler} value={enteredContactName} />
                <TextInput placeholder="Your Phone/Email" style={styles.input} onChangeText={ContactInfoHandler} value={enteredContactInfo} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} ><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button} ><Button title="ADD" color="#030436" onPress={addItemHandler} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#030436',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '61%'
    },
    button: {
        width: '40%'
    }
});

export default ContactInput;