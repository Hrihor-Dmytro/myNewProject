import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text>Hallo ;)</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "red",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 6,
  },
});
