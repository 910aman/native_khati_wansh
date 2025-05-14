/* eslint-disable react-native/no-inline-styles */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const imageLogo = require('../../assets/khatiWansh_logo.png');

type RootStackParamList = {
    BusinessListScreen: undefined;
    BusinessSearchScreen: undefined;
    BusinessListDetailsScreen: undefined;
};

type BusinessListScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'BusinessListScreen'>;
};

const businesses = [
    {
        id: '1',
        name: 'Silvery Infotech',
        ceo: 'Rajat Khati',
        phone: '+91 999 9999 999',
        address: 'SBT Tower new john indore...',
        image: '../../assets/building_info.jpg',
    },
    {
        id: '2',
        name: 'Silvery Infotech',
        ceo: 'Rajat Khati',
        phone: '+91 999 9999 999',
        address: 'SBT Tower new john indore...',
        image: '../../assets/building_info.jpg',
    },
    {
        id: '3',
        name: 'Silvery Infotech',
        ceo: 'Rajat Khati',
        phone: '+91 999 9999 999',
        address: 'SBT Tower new john indore...',
        image: '../../assets/building_info.jpg',
    },
    {
        id: '4',
        name: 'Silvery Infotech',
        ceo: 'Rajat Khati',
        phone: '+91 999 9999 999',
        address: 'SBT Tower new john indore...',
        image: '../../assets/building_info.jpg',
    },
];

const BusinessListScreen = ({ navigation }: BusinessListScreen) => {
    const renderItem = ({ item }: { item: typeof businesses[0] }) => (
        <View style={styles.card}>
            <Image source={require('../../assets/building_info.jpg')} style={styles.cardImage} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.ceo}>CEO : {item.ceo}</Text>
                <View style={styles.row}>
                    <Icon name="call-outline" size={16} color="#444" />
                    <Text style={styles.text}>  {item.phone}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="location-outline" size={16} color="#444" />
                    <Text style={styles.text}>  {item.address}</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.replace('BusinessListDetailsScreen'); }}>
                    <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imageLogo} style={styles.image} />
                <Text style={styles.headerText}>Business List</Text>
            </View>
            <FlatList
                data={businesses}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 10 }}
            />
        </View>
    );
};

export default BusinessListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
        backgroundColor: 'rgba(120, 134, 255, 0.13)',
    },
    image: {
        height: 50,
        width: 50,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
        color: '#b1252c',
        fontSize: 16,
        marginBottom: 2,
    },
    cardImage: {
        width: 100,
        height: '100%',
        resizeMode: 'cover',
    },
    ceo: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    text: {
        fontSize: 13,
        color: '#555',
    },
    readMore: {
        marginTop: 4,
        fontSize: 13,
        color: '#b1252c',
        fontWeight: '600',
    },
});
