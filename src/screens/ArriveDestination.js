import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Routemap from './Routemap'

const ArriveDestination = ({navigation}) => {
  return (
    
<View style={styles.container}>
     <View style={styles.view1}>
     



<View style={styles.view3}>
<TouchableOpacity onPress={()=>navigation.navigate("Routemap")}>
         <View style={styles.button1}>
             <Text style={styles.button1Text}>arrived at destination</Text>
         </View>
         </TouchableOpacity>
</View>
</View>
      <Routemap/>
    </View>
  )
}

export default ArriveDestination

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },    

      view1:{
        position:"absolute",
        top:'70%',
        left:12,
        backgroundColor:"white",
        height:250,
        width:'100%',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:2, 
        zIndex: 8
        
      },
      view3:{
        flexDirection:"row",
        alignItems:"center",
           
        
        backgroundColor: "white",
        
        
        zIndex: 10
      },
      button1:{
        height:40,
        width:150,
        backgroundColor:"black",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
      },
      button1Text:{
        color:"white",
        fontSize:17,
        marginTop:-2
       
       },
       

})