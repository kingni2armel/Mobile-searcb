import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import { colors } from '../../styles';
import { styles } from './style';

function WelcomeScreen({navigation}) {
    return ( 
            <View style = {styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false}
                    activeDotColor={colors.PRIMARY}
                    dotColor={colors.ORANGE}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}   
                >
                    <View style={styles.slide1}>
                        <View style={styles.slideTop}>
                            <Text style={styles.textSlide1}>Faites vos recherches gratuitement</Text>
                            <Text style={styles.text2slide1}>
                                 Rien de mieux que de trouver les informations que vous voulez de facon fiable
                            </Text>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <View style={styles.slideTop}>
                            <Text style={styles.textSlide1}>Gratuit et sécurisée</Text>
                            <Text style={styles.text2slide2}>
                                Aucun coût supplémentaire 
                            </Text>
                        </View>
                    </View>
                  
                    <View style={styles.slide3}>
                        <View style={styles.slideTop}>
                            <Text style={styles.textSlide3}>Welcome to SEARCH APP</Text>
                            <Text style={styles.text2slide2}>
                                 Des reccherches fiables a tout moment
                            </Text>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate('Login')}
                                style={styles.btnStart}
                            >
                                    <Text style={styles.textStart}>Start</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Swiper>   
            </View> 
        );
}
export default WelcomeScreen;