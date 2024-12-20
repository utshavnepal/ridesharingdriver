import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

import { useNavigation } from '@react-navigation/native'
const SignInScreen = () => {

    const [username, setUsername] = useState()
    const[password, setPassword] = useState()

    const {height} = useWindowDimensions();
    const onSignInPressed =()=>{
      navigation.navigate('HomePage')

    }
    const onForgotPasswordPressed = ()=>{

      navigation.navigate('ForgotPwd')
    }
    
    
const navigation = useNavigation()

  return (


    <ScrollView showsVerticalScrollIndicator={false}>
     
     <View style={styles.root}>
    
    <CustomInput placeholder="Username" value={username} setValue={setUsername} />
    <CustomInput placeholder="Password"  value={password} setValur={setPassword} secureTextEntry={true}
    />
    <CustomButton text="signin" onPress={onSignInPressed}/>
    <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} 
        type="TERTIARY"
    />

    
    
    </View>

    </ScrollView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({  

    logo:{
        width:'70%',
        maxWidth: 300,
        height:100
    },
    root:{
        alignItems:'center',
        padding:20,
    }
})