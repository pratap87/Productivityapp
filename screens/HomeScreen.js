import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from '../components/ListItems';
import AddItem from '../components/Additem';
import { MonoText } from '../components/StyledText';
import { uuid } from 'uuidv4'
const img=require('./avt.png')
export default function HomeScreen() {

  const [items, setItem] = React.useState([
    { id: 1, text: 'Complete DataStructure' },
    { id: 2, text: 'complete Graphql' },
    { id: 3, text: 'Apply for job' },
    { id: 4, text: 'Apply for internship' },

    
    
  ]

  );

  const deletItem = (id) => {
    setItem(prevItem => {
      return prevItem.filter(items => items.id != id);
    })
  }

  const addItem = (item) => {
    if (!item) {
      Alert.alert('Error', 'Please Enter An Item', { text: 'OK', onPress: () => console.log('OK Pressed') });
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
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deletItem={deletItem} />

        )}
      />
    </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



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
