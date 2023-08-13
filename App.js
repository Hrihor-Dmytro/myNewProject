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
  TouchableOpacity,
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
        <ImageBackground
          source={require("./images/1.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height:100"}
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
                secureTextEntry={true}
              ></TextInput>
              {/* <Button
                title="Зарееструватися"
                color="#FF6C00"
                accessibilityLabel="Learn more about this purple button"
                // onPress={() => Alert.alert("Simple Button pressed")}
                onPress={onLogin}
              /> */}
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={onLogin}
              >
                <Text style={styles.btnText}>Зарееструватися</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "silver",
  },
  innerBox: {
    borderWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    backgroundColor: "white",

    paddingBottom: 20,
    // marginHorizontal: 1,
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
    justifyContent: "flex-end",
    // justifyContent: "center",
    resizeMode: "stretch",
    // width: 390,
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    height: 45,
  },
  btnText: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 5,
  },
});
