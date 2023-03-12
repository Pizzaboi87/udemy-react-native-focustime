import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <View style={styles.main} >
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} setHistory={setHistory} />
        </View>
      ) : (
        <Timer
          focusSubject={currentSubject}
          setFocusSubject={setCurrentSubject}
          setHistory={setHistory}
        />
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
  main: {
    flex: 1,
    justifyItems: 'center',
  }
});
