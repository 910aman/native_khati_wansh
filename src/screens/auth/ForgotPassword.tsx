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
    Home: undefined;
    Forgot: undefined;
};

type ForgotPassword = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Forgot'>;
};


const ForgotPasswordScreen = ({ navigation }: ForgotPassword) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>You lost Password forgot with email</Text>

            {/* Email */}
            <Text style={styles.label}>Email Id</Text>
            <View style={styles.inputBox}>
                <Text style={styles.icon}>📧</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email id"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                />
            </View>

            {/* Phone */}
            <Text style={styles.label}>Phone</Text>
            <View style={styles.inputBox}>
                <Text style={styles.icon}>📞</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email id"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                />
            </View>

            {/* Send OTP Button */}
            <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendText}>Send OTP</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginContainer}>
                <Text style={styles.loginPrompt}>have an account ? </Text>
                <TouchableOpacity onPress={() => { navigation.replace('Login1'); }}>
                    <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 30,
        textAlign: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#b30000',
        marginBottom: 6,
        marginTop: 10,
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 12,
        marginBottom: 8,
        width: '100%',
        height: 50,
    },
    icon: {
        fontSize: 16,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
    sendButton: {
        backgroundColor: '#b30000',
        borderRadius: 12,
        width: '100%',
        paddingVertical: 14,
        marginTop: 20,
        alignItems: 'center',
    },
    sendText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    loginPrompt: {
        fontSize: 14,
        color: '#555',
    },
    loginLink: {
        fontSize: 14,
        color: '#b30000',
        fontWeight: '600',
    },
});

export default ForgotPasswordScreen;
