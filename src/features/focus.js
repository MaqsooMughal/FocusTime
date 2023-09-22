import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/size";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What Would You Like To focus On?"
        />
        <RoundedButton
          style={styles.button}
          title="+"
          size={60}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

  inputContainer: {
    padding: 20,
    marginTop: spacing.md,
    justifyContent: "center",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    padding: 3,
  },
  button: {
    justifyContent: "center",
  },
  Text: {
    color: colors.white,
  },
});
