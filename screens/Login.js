import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import FormButton from '../src/Components/Button';
import FormInput from '../src/Components/FormInput';
import Logo from '../src/assets/image.jpg'

const Login = () => {
    return (
        <>
        <View style={styles.LoginWrapper}>
            <Image style={styles.LoginLogo}
            source={Logo}
            />
            <View style={styles.LoginTextWrapper} >
                <Text  style={styles.LoginText} >Login</Text>
                <Text  style={styles.LoginTextDiscription} >Enter your credentials to get 
                    access to the workshop app</Text>
            </View>
            <View>
                <FormInput
                    // labelValue={email}
                    InputSubject="Email Address*"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <FormInput
                    // labelValue={email}
                    InputSubject="Password*"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Password"
                    iconType="lock"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
            </View>
            <Text style={styles.ForgotText} >Forgot Password?</Text>
            <FormButton 
             buttonTitle="Login"
            onPress={() => {}}
            />
                </View>
        
        </>
    )
}

export default Login


const styles = StyleSheet.create({
    LoginWrapper:{
        
        backgroundColor:'#F5F5F5',
        flex: 1,
        alignItems:'center',
        padding: 30,
        justifyContent:'center',
        
    },
    LoginLogo: {
        width: 175,
        height: 175,
        resizeMode: 'contain',
    },
    LoginTextWrapper:{
        width:200,
        margin: 15,
        marginBottom: 30,
    },
    LoginText:{
        alignItems:'center',
        textAlign:'center',
        fontSize:25,        
        fontWeight: 'bold',
        color: '#AE282E',
    },
    LoginTextDiscription:{
        alignItems:'center',
        textAlign:'center',
        
    },
    ForgotText:{
        margin: 15,
        color: '#AE282E',
    },
}) 