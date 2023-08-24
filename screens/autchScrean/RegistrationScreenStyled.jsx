import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stylesS: {
    width: 390,
  },
  stylesM: {
    width: 560,
    height: 260,
    input: {
      height: 30,
      padding: 3,
      fontSize: 20,
    },
    posychionM: {
      left: "46%",
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerBox: {
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 40,
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
    resizeMode: "stretch",
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
  registrText: {
    textAlign: "center",
    color: "#1B4371",
    marginTop: 10,
  },
  avatar: {
    backgroundColor: "white",
    width: 120,
    height: 120,
    borderRadius: 8,
    position: "absolute",
    top: -80,
    left: "43%",
  },
});
