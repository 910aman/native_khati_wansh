import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface GridItem {
  id: string;
  icon: any;
  screen?: keyof RootStackParamList;
}
const data: GridItem[] = [
  {
    id: '1',
    icon: require('../assets/icons/donation.png'),
    screen: 'BusinessSearchScreen',
  },
  {
    id: '2',
    icon: require('../assets/icons/ews.png'),
    screen: 'EwsScreen',
  },
  {
    id: '3',
    icon: require('../assets/icons/donationUpdate.png'),
    screen: 'DonationListScreen',
  },
  {
    id: '4',
    icon: require('../assets/icons/vote.png'),
    screen: 'FinanceDetailsScreen',
  },
  {
    id: '5',
    icon: require('../assets/icons/social-media.png'),
    screen: 'SocialMediaScreen',
  },
  {
    id: '6',
    icon: require('../assets/icons/about-us.png'),
    screen: 'AboutScreen',
  },
  {
    id: '7',
    icon: require('../assets/icons/vision-mission.png'),
    screen: 'VisionMissionScreen',
  },
  {
    id: '8',
    icon: require('../assets/icons/history.png'),
    screen: 'HistoryScreen',
  },
  {
    id: '9',
    icon: require('../assets/icons/village.png'),
    screen: 'VillageScreen',
  },
  {
    id: '10',
    icon: require('../assets/icons/ews.png'),
    screen: 'EventScreen',
  },
  {
    id: '11',
    icon: require('../assets/icons/publish.png'),
    screen: 'PublicationScreen',
  },
  {
    id: '12',
    icon: require('../assets/icons/thinking.png'),
    screen: 'DisciplineMapScreen',
  },
  {
    id: '13',
    icon: require('../assets/icons/help.png'),
    screen: 'AddVolunteerScreen',
  },
  {
    id: '14',
    icon: require('../assets/icons/network.png'),
    screen: 'ServiceRequirementScreen',
  },
  {
    id: '15',
    icon: require('../assets/icons/thinking.png'),
    screen: 'ContactScreen',
  },
];

type RootStackParamList = {
  Home: undefined;
  BusinessSearchScreen: undefined;
  DonationScreen: undefined;
  EwsScreen: undefined;
  DonationListScreen: undefined;
  FinanceDetailsScreen: undefined;
  SocialMediaScreen: undefined;
  AboutScreen: undefined;
  VisionMissionScreen: undefined;
  HistoryScreen: undefined;
  VillageScreen: undefined;
  EventScreen: undefined;
  PublicationScreen: undefined;
  DisciplineMapScreen: undefined;
  AddVolunteerScreen: undefined;
  ServiceRequirementScreen: undefined;
  ContactScreen: undefined;
};

type HomeScreen = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};


const HomeScreen = ({ navigation }: HomeScreen) => {

  const renderItem = ({ item }: { item: GridItem }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        item.screen
          ? navigation.navigate(item.screen)
          : Alert.alert('Coming Soon', 'screen is under development.')
      }>
      <Image source={item.icon} style={styles.gridIcon} />
      {/* <Text style={styles.gridLabel}>{item.label}</Text> */}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/splashScreen_bg.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.languageBox}>
          <Image source={require('../assets/khatiWansh_logo.png')} style={styles.flagIcon} />
          <Text style={styles.languageText}>English</Text>
          <Icon name="chevron-down" size={16} color="#fff" />
        </View>
      </View>

      {/* Banner */}
      <View style={styles.bannerBox}>
        <Text style={styles.bannerText}>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,
        </Text>
      </View>

      {/* Grid */}
      <View style={styles.gridContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const itemSpacing = 12;
const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 160,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  languageBox: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#b21836',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  languageText: {
    color: '#fff',
    marginRight: 4,
    fontSize: 12,
  },
  bannerBox: {
    backgroundColor: '#800000',
    padding: 10,
    margin: 12,
    borderRadius: 10,
    position: 'relative',
  },
  bannerText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
  gridContainer: {
    marginBottom: 10,
    paddingHorizontal: itemSpacing / 2,
  },
  gridItem: {
    width: itemWidth,
    height: itemWidth, // Square shape
    margin: itemSpacing / 2,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  gridIcon: {
    width: 'auto',
    height: '100%',
    marginBottom: 8,
    resizeMode: 'contain',
  },
  gridLabel: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
