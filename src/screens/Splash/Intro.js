import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../../components/Button";

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLoader}>
        <View style={styles.loader}></View>
      </View>
      <Text style={[styles.subtitle, { fontWeight: "bold" }]}>
        Bienvenido a Besta
      </Text>
      <Text style={styles.title}>¡Acelera tus ganancias!</Text>
      <Text style={styles.subtitle}>
        Consigue tu auto HOY y empieza a generar más ingresos
      </Text>
      <Ionicons name="image" size={200} color={"#6B7280"} style={styles.icon} />
      <View style={styles.footer}>
        <View style={styles.containerBtn}>
          <AppButton
            title={"Iniciar sesión"}
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: "#ffff",
              borderWidth: 1,
              borderColor: "#6B7280",
            }}
            textColor="#6B7280"
          />
        </View>
        <View style={styles.containerBtn}>
          <AppButton title={"Regístrate"} onPress={() => navigation.navigate("SignUp")}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: "15%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  containerLoader: {
    width: "100%",
    backgroundColor: "#D1D5DB",
    height: 5,
    marginBlock: 15,
    borderRadius: 12,
  },
  loader: {
    width: "10%",
    backgroundColor: "#6B7280",
    height: 5,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#6B7280",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 10,
  },
  icon: {
    alignSelf: "center",
    padding: "25%",
  },
  footer: {
    position: "absolute",
    bottom: "5%",
    flexDirection: "row",
    alignSelf: "center",
  },
  containerBtn: {
    width: "50%",
    padding: "2%",
  },
});
