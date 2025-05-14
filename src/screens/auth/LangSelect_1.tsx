import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const images = {
    splashScreenBG: require('../../assets/splashScreen_bg.jpg'),
    khatiWanshLogo: require('../../assets/khatiWansh_logo.png'),
    twoDots: require('../../assets/dots1.png'),
};

type RootStackParamList = {
    Lang1: undefined;
    Lang2: undefined;
};

type LoginPage1 = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Lang1'>;
};

const LoginScreenOne = ({ navigation }: LoginPage1) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={images.splashScreenBG} style={styles.backgroundImage}>
                    <View style={styles.overlay}>
                        <Image source={images.khatiWanshLogo} style={styles.logo} />
                        <Text style={styles.text}>Welcome To Khati Wansh</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.transparentButton} onPress={() => { navigation.replace('Lang2'); }}>
                                <Text style={styles.buttonTextHindi}>Hindi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.whiteButton}>
                                <Text style={styles.buttonTextEnglish}>English</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.twoDotsContainer}>
                            <Image source={images.twoDots} />
                            <Text style={styles.nextBtnText}>Next</Text>
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
    logo: {
        width: 190,
        height: 190,
        resizeMode: 'contain',
    },
    buttons: {
        flexDirection: 'row',
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
    buttonTextEnglish: {
        fontSize: 16,
        color: '#fff',
    },
    buttonTextHindi: {
        fontSize: 16,
        color: 'rgba(158, 38, 50, 1)',
    },
    twoDotsContainer: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 8,
    },
    nextBtnText: {
        fontSize: 14,
        color: '#fff',
    },
});

export default LoginScreenOne;
