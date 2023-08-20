import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import {
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
  Dimensions,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  // const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  // const [dimensions, setDimensions] = useState({
  //   window: windowDimensions,
  //   screen: screenDimensions,
  // });
  // const windowDimensions = Dimensions.get("window");
  // const screenDimensions = Dimensions.get("screen");
  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     "change",
  //     ({ window, screen }) => {
  //       setDimensions({ window, screen });
  //     }
  //   );
  //   return () => subscription?.remove();
  // });

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  const data = {
    login,
    password,
    email,
  };

  const inputLogin = (text) => setLogin(text);
  const inputPassword = (text) => setPassword(text);
  const inputEmail = (text) => setEmail(text);

  const onLogin = () => {
    console.log(data);
    // Alert.alert("Собрал перед отправкой", `${login} ${password} ${email}`);
    setEmail("");
    setLogin("");
    setPassword("");
  };

  const keybordDismiss = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
  };

  // useEffect(() => {
  //   const onChenge = () => {
  //     const width = Dimensions.get("window").width - 20 * 2;
  //     console.log(width);
  //   };
  //   Dimensions.addEventListener("change", onChenge);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChenge);
  //   };
  // }, [dimensions]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keybordDismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("./images/1.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height:100"}
          >
            <View
              style={{
                ...styles.innerBox,
                paddingBottom: isShowKeyboard ? 20 : 60,
                // width: dimensions,
              }}
            >
              <Text style={styles.text}>Реєстрація</Text>
              <TextInput
                value={login}
                style={styles.input}
                placeholder="Логін"
                onChangeText={inputLogin}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TextInput
                value={email}
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onChangeText={inputEmail}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TextInput
                value={password}
                style={styles.input}
                placeholder="Пароль"
                onChangeText={inputPassword}
                secureTextEntry={true}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    // fontFamily: "Roboto-Regular",
    // marginHorizontal: 20,

    paddingBottom: 20,
    // marginHorizontal: 1,
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    fontFamily: "Roboto-Regular",
    borderRadius: 6,
    backgroundColor: "#E8E8E8",
    // width: 315,
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
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 25,
    paddingTop: 5,
  },
});
