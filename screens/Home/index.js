import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';


function HomeScreen({navigation}) {
    return ( 
            <View>
                    <Text
                                            onPress={()=>navigation.navigate('Search')}

                    >Oumar cisse</Text>

            </View>     
        );
}

export default HomeScreen;