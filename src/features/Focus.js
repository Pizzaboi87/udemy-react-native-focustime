import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    paddingTop: spacing.xxl
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
