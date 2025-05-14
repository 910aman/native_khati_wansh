/* eslint-disable react-native/no-inline-styles */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

type RootStackParamList = {
    Home: undefined;
    BusinessSearchScreen: undefined;
    BusinessListScreen: undefined;
};

type BusinessSearchScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'BusinessSearchScreen'>;
};

const BusinessSearchScreen = ({ navigation }: BusinessSearchScreen) => {
    const [category, setCategory] = useState(null);
    const [businessType, setBusinessType] = useState(null);
    const [state, setState] = useState(null);
    const [district, setDistrict] = useState(null);
    const [city, setCity] = useState(null);
    const imageLogo = require('../../assets/khatiWansh_logo.png');

    const data = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image source={imageLogo} style={styles.image} />
                <Text style={styles.title} >Business Search</Text>
            </View>

            <DropdownComponent label="Select by categories" value={category} setValue={setCategory} data={data} />
            <DropdownComponent label="Select Business Type" value={businessType} setValue={setBusinessType} data={data} />
            <DropdownComponent label="Select State" value={state} setValue={setState} data={data} />
            <DropdownComponent label="Select District" value={district} setValue={setDistrict} data={data} />
            <DropdownComponent label="Select City/Tehsil" value={city} setValue={setCity} data={data} />

            <TouchableOpacity style={styles.searchButton} onPress={() => { navigation.replace('BusinessListScreen'); }}>
                <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const DropdownComponent = ({
    label,
    value,
    setValue,
    data,
}: {
    label: string;
    value: string | null;
    setValue: (val: any) => void;
    data: { label: string; value: string }[];
}) => {
    return (
        <View style={styles.dropdownWrapper}>
            <Text style={styles.dropdownLabel}>{label}</Text>
            <Dropdown
                style={styles.dropdown}
                placeholder={label}
                data={data}
                labelField="label"
                valueField="value"
                value={value}
                onChange={(item: { value: any; }) => setValue(item.value)}
                selectedTextStyle={styles.dropdownText}
                placeholderStyle={{ color: '#888' }}
            />
        </View>
    );
};

export default BusinessSearchScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000',
    },
    dropdownWrapper: {
        marginBottom: 16,
    },
    dropdownLabel: {
        fontSize: 14,
        color: '#7a7a7a',
        marginBottom: 4,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === 'ios' ? 18 : 12,
        backgroundColor: '#f9f9f9',
    },
    dropdownText: {
        fontSize: 14,
        color: '#333',
    },
    searchButton: {
        backgroundColor: '#aa1e23',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 20,
    },
    searchText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
