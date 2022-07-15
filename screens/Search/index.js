import React, { Component,useState,useEffect } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import axios from 'axios';
import { styles } from './style';

class SearchScreen extends Component {

    state = {
      link:'',
      date:'',
      text:''
    }    

     Search = async()=>{
      const [url,setUrl] = useState('')
          const data = {
              link:this.state.link,
              date:this.state.date
          }
          const response = await axios.get('http://archive.org/wayback/available?url='+data.link)
          console.log(response.data.url)
    }

  render()
  {
    return ( 
      <View style = {styles.container}>
          <View style={styles.ContainerImage}>
              <Text style={styles.textRecherche}>Remplissez le formulaire et faites votre recherche</Text>
              <TextInput
                  placeholder= 'Date' 
                  style={styles.InputStyle}
                  onChangeText={(value)=>this.setState({date:value})}
              />
              <TextInput 
                  placeholder='Lien du sitesetListesetListe'
                  style={styles.InputStyle}
                  onChangeText={(value)=>this.setState({link:value})}

              />
              <TouchableOpacity 
                  onPress={this.Search}
                  style={styles.btnConnect}
              >
                  <Text style={styles.textConnect}>Search</Text>
              </TouchableOpacity>
        
            </View>

            <View>
            </View>
      </View>     
  );
  }


}

export default SearchScreen;