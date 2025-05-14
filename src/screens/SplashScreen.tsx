import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Animated } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const images = {
    splashScreenBG: require('../assets/splashScreen_bg.jpg'),
    khatiWanshLogo: require('../assets/khatiWansh_logo.png'),
};

type RootStackParamList = {
    Splash: undefined;
    Lang1: undefined;
};

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Lang1');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 10000, // 10 seconds
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={images.splashScreenBG} style={styles.backgroundImage}>
                    <View style={styles.overlay}>
                        <Animated.Image
                            source={images.khatiWanshLogo}
                            style={[styles.logo, { transform: [{ rotate: spin }] }]}
                        />
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
        gap: '4px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 190,
        height: 190,
        marginBottom: 20,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
