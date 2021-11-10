import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormButton from '../src/Components/Button';
import Logo from '../src/assets/image.jpg'

const Splash = () => {
    return (
      <>
        <View style={styles.splashWrapper} >
          <Image style={styles.SpashScreenLogo}
            source={Logo}
          />
          <FormButton 
               buttonTitle="Get Started"
              onPress={() => {}}
          />

        </View>
      </>
    );
  };
  
  export default Splash;
  
  const styles = StyleSheet.create({
      splashWrapper:{
          backgroundColor:'#FFFFFF',
          flex: 1,
          justifyContent:'space-around',
          alignItems:'center',
          padding: 25,
      },
      SpashScreenLogo:{
          marginTop: 50,
          width: 225,
          height: 225,
          resizeMode: 'contain',
      },
    
  }
  )