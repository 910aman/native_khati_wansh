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

type Register1 = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Register1'>;
};

const Register1 = ({ navigation }: Register1) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <Text style={styles.subtitle}>Enter your details and create account</Text>

            <Text style={styles.label}>Name</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>👤</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={styles.label}>Email Id</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>📧</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email id"
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={styles.label}>Phone</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>📞</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>🔒</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>already have an account ? </Text>
                <TouchableOpacity onPress={() => {navigation.replace('Login1');}}>
                    <Text style={styles.loginLink}>Login</Text>
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
        fontSize: 14,
        color: '#b30000',
        marginBottom: 6,
        marginTop: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 8,
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 14,
        color: '#000',
    },
    signupButton: {
        backgroundColor: '#b30000',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    signupText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        fontSize: 14,
        color: '#555',
    },
    loginLink: {
        fontSize: 14,
        color: '#b30000',
        fontWeight: 'bold',
    },
});

export default Register1;
