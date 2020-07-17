import React, { Component } from 'react'; 
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  ScrollView,
  ImageBackground
} from 'react-native'; 
const img=require('./stylish-boy.png')
import { WebBrowser } from 'expo'
 import meet from './meet.png'
 import Icon from '@expo/vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {


  state = { 
    name: 'Arun ', 
    lastName: 'Chauhan', 
    occupation: 'Software Engineer', 
    TaskCompleted: '4', 
    projects: '2', 
    comments: '2', 
  }; 
  static navigationOptions = {
    header: null
  }

   

  render() {
    const { 
      name, 
      lastName, 
      occupation, 
      TaskCompleted, 
      projects, 
      comments, 
    } = this.state; 
    return (
      

            <ImageBackground source={img} style={styles.container}>
               <View style={styles.info}> 
              
               <View style={styles.personal}> 
                 <Text style={styles.name}>
                 
                   {name} 
                 {lastName} 
                 </Text> 
                 <Text style={styles.occupation}> 
                   {occupation.toUpperCase()} 
                 </Text> 
               </View> 
            
             </View> 
             <View style={styles.stats}> 
                 <Text   style={styles.it}> <Icon name="bar-chart" size={30} color="white" />      Tasks:{TaskCompleted}  </Text> 
                 <Text  style={styles.it}> <Icon name="book" size={30} color="white" />       Projects:{projects}</Text> 
                
             
                
               </View> 
                

            </ImageBackground>
         
    
    )
  }
     
} 
   const  styles = StyleSheet.create({ 
          container: { 
  
           flex: 1, 
            height: null, 
            width: null, 
          }, 
         info: { 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            top: 0, 
            left: 0, 
            position: 'absolute', 
            right: 0, 
    shadowColor: "white",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 13,
          }, 
           personal: { 
              padding: 20, 
            }, 
      stats:{
        marginBottom:5,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor: 'rgba(0,0,0,0.5)', 
        padding:30,
        shadowColor: "white",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 13,
       
      },
            name: { 
              color: '#fff', 
             
              fontSize: 30, 
              fontWeight: 'bold', 
            }, 
            occupation: { 
              color: 'aqua', 
              marginTop: 5, 
            }, 
            icons:{
              position:'absolute',
              left:0,
            },
            it:{ color: 'aqua', 
                    marginTop: 5, 
              fontSize: 30, 
              
            },
            soc:{
              position:'relative',
               
            }
        }); 
 