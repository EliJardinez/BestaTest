import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/TextInput";
import AppButton from "../../components/Button";
import { LoginService } from "../../services/authService";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    const result = LoginService.validateLogin(email.trim(), password.trim());

    if (!result.success) {
      setError(result.message);
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Main");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={{ paddingLeft: 16, alignItems: "flex-start" }}>
          <TouchableOpacity
            style={styles.containerBtnBack}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={"#111827"} />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 18 }}>
          <Text style={styles.title}>Bienvenido de nuevo a Besta</Text>
          <Text style={styles.subtitle}>
            Ingresa tu correo para continuar. Así verificamos que seas tú.
          </Text>

          <AppTextInput
            label={"Email"}
            placeholder="Introduce tu correo electrónico"
            style={styles.input}
            onChangeText={setEmail}
            //errorMessage={error ? error : null}
          />
          <AppTextInput
            label={"Contraseña"}
            placeholder="Contraseña"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            //errorMessage={error ? error : null}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Text style={styles.subtitle}>¿Ya tienes una cuenta Besta?</Text>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.subtitle}>Olvide mi contraseña</Text>
          <AppButton
            title="Iniciar sesión"
            onPress={handleLogin}
            loading={isLoading}
            disabled={!isFormValid || isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: "8%",
  },
  containerBtnBack: {
    width: 40,
    height: 40,
    backgroundColor: "#D1D5DB",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6B7280",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 10,
  },
  containerFooter: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 18,
  },
  error: { color: "red", fontSize: 16, marginBlock: 5, marginBottom: 15 },
});
