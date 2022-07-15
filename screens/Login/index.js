import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import { styles } from './style';

function LoginScreen({navigation}) {
    return ( 
            <View style = {styles.container}>
                <View style={styles.ContainerImage}>
                <Text style={styles.TextConnexion}>Connexion</Text>
                <TextInput
                    placeholder= 'Email' 
                    style={styles.InputStyle}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.InputStyle}
                />
                <TouchableOpacity 
                        style={styles.btnConnect}
                        onPress={()=>navigation.navigate('Drawer')}
                >
                        <Text style={styles.textConnect}>Login</Text>
                 </TouchableOpacity>
                </View>
                <View style={styles.containerCopiright}>
                        <Text style={styles.copiright}>Copyright(c)ekosmartafrica 2022</Text>
                </View>
            </View>     
        );
}

export default LoginScreen;