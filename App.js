import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>Hallo ;)</Text>
        <TextInput style={styles.button} textAlign={"center"}></TextInput>
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
    backgroundColor: "silver",
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "tomato",
    width: 300,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    borderRadius: 6,
    backgroundColor: "white",
    color: "white",
    fontSize: 20,
    // textAlign: "center",
    marginHorizontal: 20,
  },
});
