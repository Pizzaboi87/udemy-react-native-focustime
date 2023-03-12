import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have focused on:</Text>
      <FlatList
        data={history}
        renderItem={({ item, index }) => (
          <Text style={styles.list}>
            {index + 1} - {item}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  list: {
    color: colors.white,
    fontSize: fontSizes.md
  },
});
