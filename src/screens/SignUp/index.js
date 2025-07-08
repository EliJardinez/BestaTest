import { View, Text, StyleSheet } from "react-native";
import AppButton from "../../components/Button";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.subtitle}>Proximamente...</Text>
        <AppButton title={"Regresar"} onPress={() => navigation.goBack()} />
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
  subtitle: {
    fontSize: 22,
    textAlign: "center",
    color: "#6B7280",
  },
});
