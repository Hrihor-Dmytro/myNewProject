import * as SplashScreen from "expo-splash-screen";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";

import { View, Text, Keyboard } from "react-native";
import { styles } from "../registrationScreen/RegistrationScreenStyled";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { log } from "react-native-reanimated";

const datalogin = {
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export const LoginScrean = ({ navigation }) => {
  const [data, setData] = useState(datalogin);
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [stylesWidsh, setStyles] = useState(styles.stylesS);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

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

  const keybordDismiss = (datalogin) => {
    setData(datalogin);
    setisShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <Text style={styles.text}>Увійти</Text>
              <TextInput
                value={data.email}
                placeholder="login"
                style={{ ...styles.input }}
                onChangeText={(value) => setData({ ...data, email: value })}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TextInput
                value={data.password}
                style={{ ...styles.input }}
                placeholder="Пароль"
                onChangeText={(value) => setData({ ...data, password: value })}
                secureTextEntry={true}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={keybordDismiss}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <Text
                style={styles.registrText}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту? Зареєструватися
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
