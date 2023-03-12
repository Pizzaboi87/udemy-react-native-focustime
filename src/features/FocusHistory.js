import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history, setHistory }) => {
  const resetList = () => setHistory([]);

  const deleteItem = (index) => {
    setHistory(history.filter((item) => history.indexOf(item) !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have focused on:</Text>
      <FlatList
        style={styles.listContainer}
        data={history}
        renderItem={({ item, index }) => (
          <View style={styles.listItemLine}>
            <Text style={styles.listItem}>
              {index + 1} - {item}
            </Text>
            <RoundedButton
              title="-"
              size={40}
              onPress={() => deleteItem(index)}
            />
          </View>
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
  listItemLine: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItem: {
    color: colors.white,
    fontSize: fontSizes.lg,
    marginRight: 10,
  },
});
