//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome-text" style={styles.text}>
        Hello, React Native!{'\n'}
        Nama: Pasaur Alharits Luthfullah{'\n'}
        NIM: D1041221083{'\n'}{'\n'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
