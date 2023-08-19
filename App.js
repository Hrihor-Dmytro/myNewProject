import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
// import { AppLoading } from "expo";
import { useFonts } from "expo-font";
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
} from "react-native";

// import * as Font from "expo-font";

// const loadFonts = async () => {
//   return await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowKeyboard, setisShowKeyboard] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const data = {
    login,
    password,
    email,
  };
  // console.log(data);

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

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keybordDismiss}>
      <View style={styles.container}>
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
              }}
              onLayout={onLayoutRootView}
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
  },
  button: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 5,
  },
});
