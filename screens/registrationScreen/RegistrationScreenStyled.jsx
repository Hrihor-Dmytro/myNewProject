import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stylesS: {
    width: 370,
  },
  stylesM: {
    width: 560,
    height: 260,
    input: {
      height: 30,
      padding: 3,
      fontSize: 20,
    },
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "silver",
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
});
