import { COLORS } from 'constant/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Plateforme Éducative YELLO</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.tertiary,
        padding: 25,
        paddingTop: 60,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
