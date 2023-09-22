import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

import { fontSize, spacing } from "../utils/size";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>We Have Not Focused On Anything Yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things We Have Focused On:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSize.md,
    paddingTop: spacing.sm,
    paddingLeft: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.md,
    padding: spacing.md,
    fontWeight: "bold",
  },
});
