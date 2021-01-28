import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Banner = ({ title }) => (
    <Text style={styles.banner}>{ title || '[loading...]' }</Text>
  );

const styles = StyleSheet.create({
    banner: {
        color: '#888',
        fontSize: 32,
      },
});

export default Banner;