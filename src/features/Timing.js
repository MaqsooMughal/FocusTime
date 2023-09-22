import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={70}
          title="12s"
          onPress={() => onChangeTime(0.2)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={70}
          title="15s"
          onPress={() => onChangeTime(0.25)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="10m" onPress={() => onChangeTime(10)} />
      </View>
    </>
  );
};
export const Timings = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton2}>
        <RoundedButton size={70} title="15m" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton2}>
        <RoundedButton size={70} title="30m" onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
  timingButton2: {
    flex: 0.5,
    alignItems: "center",
  },
});
