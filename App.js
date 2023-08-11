import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./images/1.jpg")} style={styles.image}>
        <View style={styles.innerBox}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="Login"
          ></TextInput>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="Password"
          ></TextInput>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
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
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderRadius: 6,
    backgroundColor: "white",
    color: "red",
    fontSize: 20,
    // textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
