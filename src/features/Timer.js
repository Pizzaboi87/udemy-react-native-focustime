import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const startPause = () => setIsStarted((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={() => {}}
        />
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar 
        progress={progress} 
        style={styles.progressBar}
        color={(progress < 0.4) ? colors.progressEnd : colors.progressBar} 
      />
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? 'pause' : 'start'}
          onPress={startPause}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    marginTop: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: spacing.lg,
    color: colors.white,
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  progressBar: {
    backgroundColor: 'transparent',
    height: spacing.sm
  }
});
