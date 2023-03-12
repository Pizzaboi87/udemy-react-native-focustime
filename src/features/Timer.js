import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { TimingButton } from './TimingButton';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, setFocusSubject, setHistory }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const [isVibrate, setIsVibrate] = useState(false);
  const [resetInPause, setResetInPause] = useState(false);

  const setDetails = (time, prog, start) => {
    setMinutes(time);
    setProgress(prog);
    setIsStarted(start);
  };

  const deleteLastSubject = () => {
    setHistory((prevHistory) => {
      return [...prevHistory].filter((item) => item !== focusSubject);
    });
    setFocusSubject('');
  };

  const turnOffVibrate = () => {
    Vibration.cancel();
    setIsVibrate(false);
  };

  const vibrationStart = () => {
    Vibration.vibrate(PATTERN, true);
    setIsVibrate(true);
  };

  const vibrationEnd = () => {
    turnOffVibrate();
    setHistory((prevHistory) => {
      return [...prevHistory, focusSubject];
    });
    setDetails(10, 1, false);
  };

  const startPause = () => {
    if (minutes !== 0) {
      setIsStarted((prevState) => !prevState);
    } else setDetails(10, 1, true);
  };

  const back = () => {
    if (isVibrate) {
      turnOffVibrate();
      setFocusSubject('');
    } else setFocusSubject('');
  };

  const reset = () => {
    if (isVibrate) {
      turnOffVibrate();
      setDetails(10, 1, false);
    } else {
      setDetails(10, 1, false);
      setResetInPause(true);
    }
  };

  const giveUp = () => {
    if (isVibrate) {
      turnOffVibrate();
      deleteLastSubject();
    } else deleteLastSubject();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={vibrationStart}
          resetInPause={resetInPause}
        />
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.lg }}>
        <ProgressBar
          progress={progress}
          style={styles.progressBar}
          color={progress < 0.2 ? colors.progressEnd : colors.progressBar}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isVibrate ? 'done' : isStarted ? 'pause' : 'start'}
          onPress={isVibrate ? vibrationEnd : startPause}
        />
      </View>
      <View style={styles.timingButtonWrapper}>
        <TimingButton onChangeTime={setMinutes} />
      </View>
      <View style={styles.escape}>
        <RoundedButton size={75} title="back" onPress={back} />
        <RoundedButton size={75} title="reset" onPress={reset} />
        <RoundedButton size={75} title="giveUp" onPress={giveUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
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
  timingButtonWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: spacing.sm,
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
    height: spacing.sm,
    marginTop: spacing.md,
  },
  escape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: spacing.sm,
    paddingLeft: spacing.sm,
    paddingBottom: spacing.md,
  },
});
