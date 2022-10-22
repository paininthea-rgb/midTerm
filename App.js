import React, { useEffect,useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const sendMessageViaMail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();

    if(isAvailable) {
      var options = {
        recipients: ['leehoang2311@gmail.com'],
        subject: 'My Information',
        body: 'message'
      };
      
      
      MailComposer.composeAsync(options).then((result) => { Alert.alert(
        "Your email has been sent!", 
        "Your email has been sent successfully!",
        [{ text: "Okay" }]
      )
    });
      //});
    } else {
      console.log("Email is not available on this device");
    }
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={ styles.appTitle }>MIDTERM{"\n"}C_Hoang</Text>
        <View style={ styles.buttonContainer }>
        <TouchableOpacity style={ styles.button } activeOpacity={.8} onPress={() => navigation.navigate('Send Email')}>
            <Text style={ styles.textStyle }>Send Email</Text>
        </TouchableOpacity>
        </View> 
      </View>
    );
  }

  function EmailScreen() {
    return (
      <View style={ styles.screen }>
        <Text style={ styles.label }>Email:</Text>
        <TextInput
          style={styles.textAreaContainer}
          underlineColorAndroid="transparent"
          placeholder="Type your email:"
          placeholderTextColor="grey"
        />

        <Text style={ styles.label }>Message:</Text>
        <TextInput
          style={styles.textAreaContainer}
          underlineColorAndroid="transparent"
          placeholder="Your message:"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        
        <View style={ styles.buttonContainer }>
          <TouchableOpacity style={ styles.button } activeOpacity={.8} onPress={ sendMessageViaMail }>
            <Text style={ styles.textStyle }>Send Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: "center" }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Send Email" component={EmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {  
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  appTitle: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },  
  label: {
    textAlign: 'left',
    fontSize: 20,
    color: '#030436',
  },
  buttonContainer: {
    paddingVertical: 20,
    width: '45%',
  },
  button: {
    width: '100%',
    height: 35,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
  },
  textAreaContainer: {
    borderColor: Colors.grey20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    width: '80%',
  },
});
