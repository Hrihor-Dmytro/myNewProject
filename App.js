import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // console.log(login);
  // console.log(password);

  const data = {
    login,
    password,
  };
  console.log(data);

  const inputLogin = (text) => setLogin(text);
  const inputPassword = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Собрал перед отправкой", `${login} ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={require("./images/1.png")}
            style={styles.image}
          >
            <View style={styles.innerBox}>
              <Text style={styles.text}>Реєстрація</Text>
              <TextInput
                value={login}
                style={styles.input}
                placeholder="Логін"
                onChangeText={inputLogin}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
              ></TextInput>
              <TextInput
                value={password}
                style={styles.input}
                placeholder="Пароль"
                onChangeText={inputPassword}
              ></TextInput>
              <Button
                title="Зарееструватися"
                color="#FF6C00"
                accessibilityLabel="Learn more about this purple button"
                // onPress={() => Alert.alert("Simple Button pressed")}
                onPress={onLogin}
              />
            </View>
            <StatusBar style="auto" />
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 10,
    backgroundColor: "white",
    width: 390,
    height: 300,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderRadius: 6,
    backgroundColor: "#E8E8E8",
    width: 315,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "stretch",
    width: 390,
  },
  button: {
    borderColor: "#E8E8E8",
    borderRadius: 50,
    backgroundColor: "FF6C00",
  },
});
