import { ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "../registrationScreen/RegistrationScreenStyled";
import { useState } from "react";

const datalogin = {
  email: "",
  password: "",
};

// console.log(datalogin);

export const LoginScrean = () => {
  const [data, setData] = useState(datalogin);

  const onDataLogin = (login, password) => {
    console.log(login, password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/1.png")}
        style={styles.image}
      >
        <View style={styles.innerBox}>
          <Text style={styles.text}>Увійти</Text>
          <TextInput
            placeholder="login"
            style={{ ...styles.input }}
          ></TextInput>
          <TextInput
            // value={password}
            style={{ ...styles.input }}
            placeholder="Пароль"
            // onChangeText={inputPassword}
            secureTextEntry={true}
            // onFocus={() => setisShowKeyboard(true)}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            // onPress={onLogin}
          >
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.registrText}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
