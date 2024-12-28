import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Touchable,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.lampContainer}>
          <View style={styles.lamp} />
          <View style={[styles.lamp, styles.lampOffset]} />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Sign Up</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupText}>Have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lampContainer: {
    flexDirection: "row",
  },
  lamp: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  lampOffset: {
    marginTop: 10,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "space-around",
  },
  loginText: {
    fontSize: 36,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "flex-start",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "#2C3E50",
  },
  loginButton: {
    height: 48,
    backgroundColor: "#007AFF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    color: "#A9A9A9",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
});

export default LoginScreen;
