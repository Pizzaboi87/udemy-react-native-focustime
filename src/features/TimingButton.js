import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const TimingButton = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButtonContainer}>
      <View style={styles.timingButtonUp}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButtonUp}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingButtonContainer: {
    flex: 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingButtonUp: {
    marginTop: -75,
  },
});
