import { colors } from "../../styles";
import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent:'center',
    backgroundColor:colors.WHITE, 
  },
  ContainerImage:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:-150,

  },
  login:{
    width: 195,
    height: 150,
  },
  InputStyle:{
    backgroundColor:colors.WHITE,
    borderColor:colors.PRIMARY,
    borderWidth:0.5,
    borderRadius:35,
    height:50,
    width:300,
    marginTop:20,
    paddingLeft:25,
    marginLeft:10
  },
  TextInput:{
    marginLeft:10
  },
  btnConnect:{
    backgroundColor:colors.PRIMARY,
    borderColor:colors.PRIMARY,
    height:50,
    borderRadius:35,
    width:300,
    marginTop:20,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
},
textConnect:{
  color:colors.WHITE
},
containerText:{
  flexDirection:'row',
  marginTop:15,
},
TestSingup:{
  color:colors.ORANGE
},
Icon1:{
  fontSize:32,
  color:colors.PRIMARY
},
Icon2:{
  fontSize:32,
  color:colors.TWITTER
},
Icon3:{
  fontSize:32,
  color:colors.RED
},
containerIcon:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginTop:10,
},
containerIconItem:{
  margin:9
},
copiright:{
  textAlign:'center',
  fontWeight:'bold',
},
containerCopiright:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:25
},
TextConnexion:{
  color:colors.PRIMARY,
  fontSize:24,
  fontWeight:'bold'
}


});

    