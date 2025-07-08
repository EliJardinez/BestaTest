import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppTextInput({
  label,
  value,
  placeholder,
  onChangeText,
  icon,
  keyboardType = "default",
  errorMessage,
  secureTextEntry = false,
  style,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.containerInput}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color="#6B7280"
            style={{ marginRight: 8 }}
          />
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          style={[styles.input, style]}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={isPasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>
        )}
      </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  label: { fontSize: 16, color: "#6B7280", marginBottom: 5 },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6B7280",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#6B7280",
  },
  error: { color: "red", fontSize: 12, marginTop: 3 },
});
