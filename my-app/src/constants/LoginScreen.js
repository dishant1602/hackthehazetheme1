import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    //fontWeight: "bold",
    color: "#1A2C79",
    marginBottom: 24,
    textAlign: "center",
    fontFamily: "Poppins-Bold"
  },
  subtitle: {
    fontSize: 21,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 30,
    textAlign: "center"
  },
  input: {
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontFamily: "Poppins-Regular",
    backgroundColor: "#F1F4FF"
  },

  inputFocused: {
    borderColor: "#1F41BB",
    borderWidth: 1
  },

  forgot: {
    alignSelf: "flex-end",
    fontFamily: "Poppins-Regular",
    color: "#1A2C79",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#1A2C79",
    padding: 15,
    borderRadius: 10,
    fontFamily: "Poppins-Regular",
    alignItems: "center",
    marginBottom: 16,
  },
  signInText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    //fontWeight: "bold",
  },
  createAccount: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    color: "#444",
    marginBottom: 20,
  },
  orText: {
    alignSelf: "center",
    color: "#999",
    marginBottom: 16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
