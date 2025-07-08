import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Ocurrio un error al solicitar permiso</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Permiso de cámara denegado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Identificación oficial (INE)"}</Text>
      <Text style={styles.subtitle}>
        Toma una foto de tu identificación o súbela desde tu galería.
      </Text>
      <View style={{ marginVertical: 20 }}>
        <View style={styles.containerImage}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          ) : (
            <TouchableOpacity onPress={takePhoto}>
              <Ionicons
                name="image"
                size={50}
                color={'#6B7280'}
                style={{ alignSelf: "center" }}
              />
              <Text style={styles.subtitle}>Sube la parte frontal de tu credencial</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: "15%",
    paddingLeft: "5%",
    paddingRight: "5%",
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
  containerImage: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6B7280",
  },
  containerFooter: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 18,
  },
});
