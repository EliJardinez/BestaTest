import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: 0,
    name: "Chevrolet Bolt EV",
    year: "2013",
    fuel_type: "Eléctrico",
    transmission: "Manual",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 1,
    name: "Chevrolet Aveo",
    year: "2013",
    fuel_type: "Gasolina",
    transmission: "Automático",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 2,
    name: "Chevrolet Bolt EV",
    year: "2013",
    fuel_type: "Eléctrico",
    transmission: "Manual",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 3,
    name: "Chevrolet Aveo",
    year: "2013",
    fuel_type: "Gasolina",
    transmission: "Automático",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 4,
    name: "Chevrolet Bolt EV",
    year: "2013",
    fuel_type: "Eléctrico",
    transmission: "Manual",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 5,
    name: "Chevrolet Aveo",
    year: "2013",
    fuel_type: "Gasolina",
    transmission: "Automático",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 6,
    name: "Chevrolet Bolt EV",
    year: "2013",
    fuel_type: "Eléctrico",
    transmission: "Manual",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
  {
    id: 7,
    name: "Chevrolet Aveo",
    year: "2013",
    fuel_type: "Gasolina",
    transmission: "Automático",
    number_doors: 4,
    number_passengers: 5,
    amount: 3975,
    image: "",
  },
];

export default function ExploreScreen({ navigation }) {
  const CarItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ width: "50%" }}>
        <View style={styles.image}>
          {item?.image ? (
            <Image source={{ uri: item.imagen }} resizeMode="cover" />
          ) : (
            <Ionicons name="image" size={50} />
          )}
        </View>
        <View style={{ padding: "3%" }}>
          <Text style={styles.price}>${item.amount.toLocaleString()}</Text>
          <Text style={{ marginLeft: 5, color: "#6B7280" }}>/semanal </Text>
        </View>
      </View>

      <View style={{ width: "50%", padding: "3%" }}>
        <Text style={[styles.titleCard, { fontWeight: "bold" }]}>
          {item.name}
        </Text>
        <Text style={styles.titleCard}>Modelo {item.year}</Text>
        <View style={styles.row}>
          <Ionicons
            name="pulse"
            size={18}
            color="gray"
            style={{ paddingInlineEnd: 5 }}
          />
          <Text style={styles.textIcon}>{item.fuel_type}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="repeat"
            size={18}
            color="gray"
            style={{ paddingInlineEnd: 5 }}
          />
          <Text style={styles.textIcon}>{item.transmission}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Ionicons
              name="repeat"
              size={18}
              color="gray"
              style={{ paddingInlineEnd: 5 }}
            />
            <Text style={styles.textIcon}>{item.number_doors}</Text>
          </View>
          <View style={[styles.row, { marginLeft: "8%" }]}>
            <Ionicons
              name="person"
              size={15}
              color="gray"
              style={{ paddingInlineEnd: 5, top: 3 }}
            />
            <Text style={styles.textIcon}>{item.number_passengers}</Text>
          </View>
        </View>

        <View style={styles.containerFooter}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textIcon}>Ver detalles</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={15}
              style={{ paddingBlockStart: 2, paddingLeft: 5 }}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explora nuestros vehículos</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem item={item} />}
      />
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
  card: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6B7280",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    height: 160,
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    fontSize: 18,
    color: "#6B7280",
  },
  textIcon: {
    fontSize: 16,
    color: "#6B7280",
  },
  price: {
    marginTop: 8,
    marginLeft: 5,
    fontSize: 22,
    fontWeight: "bold",
    color: "#6B7280",
  },
  containerFooter: {
    alignItems: "flex-end",
    marginTop: "15%",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: "2%",
    paddingBlock: 5,
  },
});
