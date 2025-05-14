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
// import MailIcon from '../../assets';
// import { FeComponentTransfer } from 'react-native-svg';

type RootStackParamList = {
    Login1: undefined;
    Register1: undefined;
    Home: undefined;
    Forgot: undefined;
};

type LoginScreen1 = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login1'>;
};

const LoginScreen1 = ({ navigation }: LoginScreen1) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Welcome to login page</Text>

            <Text style={styles.label}>Email Id</Text>
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                    aaa
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Family/Member Id"
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>🔒</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry
                    placeholderTextColor="#999"
                />
            </View>

            <TouchableOpacity style={styles.forgotPassword} onPress={() => { navigation.replace('Forgot'); }}>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.replace('Home'); }}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don’t have an account ? </Text>
                <TouchableOpacity onPress={() => { navigation.replace('Register1'); }}>
                    <Text style={styles.signupLink}>Signup</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        color: '#b30000',
        marginBottom: 6,
        marginTop: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#rgba(158, 38, 50, 0.2)',
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 8,
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 'auto',
        fontSize: 18,
        color: '#000',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginVertical: 8,
    },
    forgotText: {
        color: '#b30000',
        fontSize: 13,
    },
    loginButton: {
        backgroundColor: '#b30000',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupText: {
        fontSize: 14,
        color: '#555',
    },
    signupLink: {
        fontSize: 14,
        color: '#b30000',
        fontWeight: 'bold',
    },
});

export default LoginScreen1;
