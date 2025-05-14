import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

const icons: Record<string, string> = {
    Home: 'home-outline',
    Matches: 'heart-outline',
    Explore: 'compass-outline',
    Chat: 'chatbox-ellipses-outline',
    Profile: 'person-outline',
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={styles.tab}
                        accessibilityRole="button"
                        // accessibilityLabel={options.tabBarAccessibilityLabel || label}
                    >
                        <IonIcon
                            name={icons[route.name]}
                            size={30}
                            color={isFocused ? '#b30000' : '#1b2a57'}
                        />
                        <Text style={[styles.label, isFocused && styles.labelFocused]}>
                            {typeof label === 'string' ? label : route.name}
                        </Text>
                        {isFocused && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 10,
        paddingTop: 10,
        justifyContent: 'space-around',
    },
    tab: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#1b2a57',
        marginTop: 4,
        marginBottom: 20,
        fontWeight: '600',
    },
    labelFocused: {
        color: '#b30000',
    },
    activeIndicator: {
        position: 'absolute',
        bottom: 0,
        height: 5,
        width: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#b30000',
    },
});
