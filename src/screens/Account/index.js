import { View, Text, StyleSheet } from "react-native";
import AppButton from "../../components/Button";

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Cuenta"}</Text>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.subtitle}>Proximamente...</Text>
        <AppButton
          title={"Cerrar sesión"}
          onPress={() => navigation.replace("Intro")}
        />
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
    fontSize: 22,
    textAlign: "center",
    color: "#6B7280",
  },
});
