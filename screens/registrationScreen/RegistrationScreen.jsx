import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./RegistrationScreenStyled.jsx";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import SVG from "../../images/plus.svg";

SplashScreen.preventAutoHideAsync();

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  const [stylesWidsh, setStyles] = useState(styles.stylesS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (0 <= width && width < 540) {
      setStyles(styles.stylesS);
    } else if (540 <= width && width < 992) {
      setStyles(styles.stylesM);
    }
  }, [width]);

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
    setEmail("");
    setLogin("");
    setPassword("");
  };

  const keybordDismiss = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keybordDismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../../images/1.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height:100"}
          >
            <View
              style={{
                ...styles.innerBox,
                ...stylesWidsh,
                paddingBottom: isShowKeyboard ? 20 : 60,
              }}
            >
              <View style={{ ...styles.avatar, ...stylesWidsh.posychionM }}>
                {/* <SVG width="100%" height="70%" /> */}
              </View>
              <Text style={styles.text}>Реєстрація</Text>
              <TextInput
                value={login}
                style={{ ...styles.input, ...stylesWidsh.input }}
                placeholder="Логін"
                onChangeText={inputLogin}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TextInput
                value={email}
                style={{ ...styles.input, ...stylesWidsh.input }}
                placeholder="Адреса електронної пошти"
                onChangeText={inputEmail}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TextInput
                value={password}
                style={{ ...styles.input, ...stylesWidsh.input }}
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
              <Text style={styles.registrText}>Вже є акаунт? Увійти</Text>
            </View>

            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
