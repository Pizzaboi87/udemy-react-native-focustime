import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text>{currentSubject}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
