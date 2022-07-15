import { colors } from "../../styles";
import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      slide1: {
     
       flex:1,
        backgroundColor:colors.WHITE,
      },
      slideTop:{
        alignItems:'center',
        position:'relative',
        marginTop:182,
      },
      slide2: {
        flex:1,
        backgroundColor:colors.WHITE,
      },
      slide3: {
        flex:1,
        backgroundColor:colors.WHITE,
      },
      dotColor:{
        color:colors.BLACK
      },

      activeDotStyle:{
        width:15
      },
      ImageSlide1:{
        height:100,
        width:200,
        marginLeft:15
      },
      ImageSlide3:{
        height:150,
        width:200,
        marginLeft:15
      },
      textSlide1:{
        color:colors.PRIMARY,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25
      },
      text2slide1:{
          textAlign:'center',
          fontSize:14,
          fontWeight:'bold',
          width:300,

      },
      text2slide2:{
        textAlign:'center',
        width:300,
        fontWeight:'bold'
      },
      ImageSlide2:{
        height:100,
        width:200,
        marginLeft:15
      },
      btnStart:{
        backgroundColor:colors.PRIMARY,
        borderColor:colors.PRIMARY,
        height:50,
        borderRadius:25,
        width:300,
        marginTop:20,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
      },
      textStart:{
        color:colors.WHITE
      },
      textSlide3:{
          color:colors.PRIMARY,
          textAlign:'center',
          fontWeight:'bold',
          fontSize:25,
          marginTop:25
      }






});
    