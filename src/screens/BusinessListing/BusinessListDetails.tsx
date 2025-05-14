import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const imageLogo = require('../../assets/building_info.jpg');
const mandirMap = require('../../assets/mandir_map.png');

const BusinessListDetailsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={imageLogo}
                style={styles.topImage}
            />
            <View style={styles.contentBox}>
                <Text style={styles.title}>Silvery Infotech</Text>

                <View style={styles.row}>
                    <Icon name="location-sharp" size={16} color="gray" />
                    <Text style={styles.text}>
                        245 Near Nagar Mandir Vidhya School Main Karidoor Road Ujjain Madhya Pradesh
                    </Text>
                </View>

                <View style={styles.row}>
                    <Icon name="call" size={16} color="gray" />
                    <Text style={styles.text}>+91 999 9999 999</Text>
                </View>

                <Image
                    source={mandirMap}
                    style={styles.mapImage}
                />

                <Text style={styles.sectionHeader}>OCCUPATION DETAILS</Text>
                <Text style={styles.description}>
                    Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc.
                    People ask questions related to Hinduism, specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting...
                </Text>

                <Text style={styles.sectionHeader}>CONTACT DETAILS</Text>
                <Text style={styles.detail}><Text style={styles.bold}>Proprietor Name :</Text> Rajat Khati</Text>
                <Text style={styles.detail}><Text style={styles.bold}>Proprietor Contact :</Text> +91 1234564879</Text>
                <Text style={styles.detail}><Text style={styles.bold}>Proprietor Email :</Text> rajatkhati@gmail.com</Text>
                <Text style={styles.detail}><Text style={styles.bold}>Time :</Text> Mon To Fri (11AM - 5pm)</Text>

                <View style={styles.socialIcons}>
                    <FontAwesome name="facebook" size={24} color="#3b5998" />
                    <FontAwesome name="instagram" size={24} color="#d62976" />
                    <FontAwesome name="youtube-play" size={24} color="red" />
                </View>

                <TouchableOpacity
                    style={styles.callButton}
                    onPress={() => Linking.openURL('tel:+911234564879')}
                >
                    <Text style={styles.callButtonText}>Call Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        backgroundColor: '#f4f6f8',
    },
    topImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    contentBox: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: -20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b21836',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    text: {
        marginLeft: 6,
        color: 'gray',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
    },
    mapImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    sectionHeader: {
        fontWeight: 'bold',
        color: '#b21836',
        marginTop: 10,
        fontSize: 15,
    },
    description: {
        fontSize: 13,
        color: '#333',
        marginTop: 5,
    },
    detail: {
        fontSize: 13,
        marginTop: 4,
        color: '#333',
    },
    bold: {
        fontWeight: 'bold',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
        marginBottom: 10,
    },
    callButton: {
        backgroundColor: '#b21836',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    callButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'white',
        marginTop: 10,
    },
});

export default BusinessListDetailsScreen;
