import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

type RootStackParamList = {
    Login1: undefined;
    Register1: undefined;
    Home: undefined;
};

type OtpScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Register1'>;
};


const OtpScreen = ({ navigation }: OtpScreen) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>OTP</Text>
            <Text style={styles.subtitle}>Enter otp and change password</Text>

            {/* Masked number */}
            <Text style={styles.maskedNumber}>**** ** 12345</Text>

            {/* OTP Inputs (4 boxes) */}
            <View style={styles.otpContainer}>
                {[1, 2, 3, 4].map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                ))}
            </View>

            {/* Timer and Resend */}
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>1:00</Text>
                <TouchableOpacity>
                    <Text style={styles.resendText}>Resend Otp</Text>
                </TouchableOpacity>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={() => { navigation.replace('Home'); }}>
                <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    maskedNumber: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 24,
        color: '#000',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 24,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#b30000',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        backgroundColor: '#fff',
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    timerText: {
        fontSize: 14,
        color: '#555',
        marginRight: 10,
    },
    resendText: {
        fontSize: 14,
        color: '#b30000',
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: '#b30000',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 14,
        alignItems: 'center',
    },
    confirmText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default OtpScreen;
