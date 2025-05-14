import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const images = {
    splashScreenBG: require('../../assets/splashScreen_bg.jpg'),
    khatiWanshLogo: require('../../assets/khatiWansh_logo.png'),
};

type RootStackParamList = {
    Lang3: undefined;
    Home: undefined;
    Login1: undefined;
};

type LoginPage3 = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Lang3'>;
};


const LoginScreenThree = ({ navigation }: LoginPage3) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={images.splashScreenBG} style={styles.backgroundImage}>
                    <View style={styles.overlay}>
                        <Image source={images.khatiWanshLogo} style={styles.logo} />
                        <Text style={styles.text}>Welcome To Khati Wansh</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.transparentButton} onPress={() => { navigation.replace('Login1'); }}>
                                <Text style={styles.buttonTextLogin}>Personal Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.whiteButton}>
                                <Text style={styles.buttonTextRegister}>Personal Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 24,
        color: '#fff',
        marginVertical: 20,
    },
    highlight: {
        color: 'rgba(158, 38, 50, 1)',
    },
    logo: {
        width: 190,
        height: 190,
        resizeMode: 'contain',
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 15,
    },
    whiteButton: {
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparentButton: {
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextRegister: {
        fontSize: 16,
        color: '#fff',
    },
    buttonTextLogin: {
        fontSize: 16,
        color: 'rgba(158, 38, 50, 1)',
    },
});

export default LoginScreenThree;
