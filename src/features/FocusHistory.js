import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history, setHistory }) => {
  const resetList = () => setHistory([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have focused on:</Text>
      <FlatList
        style={styles.listContainer}
        data={history}
        renderItem={({ item, index }) => (
          <Text style={styles.list}>
            {index + 1} - {item}
          </Text>
        )}
      />
      <RoundedButton
        title="reset"
        size={75}
        style={{ marginBottom: 20 }}
        onPress={resetList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.screen,
    alignSelf: 'center',
    borderRadius: spacing.md,
    paddingTop: spacing.md,
    width: '90%',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: spacing.lg,
    alignSelf: 'flex-start',
  },
  list: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
});
