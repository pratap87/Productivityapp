import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListNotes from '../components/ListNotes';
import AddNote from '../components/Note';
import { MonoText } from '../components/StyledText';
import { uuid } from 'uuidv4'
const img=require('./avt.png')
export default function NoteScreen() {

  const [items, setItem] = React.useState([
    { id: 1, text: 'Level 4 React project' },
    { id: 2, text: 'E commerce website' },
     

    
    
  ]

  );

  const deletItem = (id) => {
    setItem(prevItem => {
      return prevItem.filter(items => items.id != id);
    })
  }

  const addItem = (item) => {
    if (!item) {
      Alert.alert('Error', 'Please Enter A Note', { text: 'OK', onPress: () => console.log('OK Pressed') });
    }
    else {
      setItem(prevItems => {
        return [{ id: uuid(), text: item }, ...prevItems];
      })
    }
  }
  return (
    
    <ImageBackground source={img} style={styles.container}>
     
    <View  >
      <AddNote addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListNotes item={item} deletItem={deletItem}  />

        )}
      />
    </View>
    </ImageBackground>
  );
}

 



function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: { 
             flex: 1, 
              height: null, 
              width: null, 
            }, 


});
