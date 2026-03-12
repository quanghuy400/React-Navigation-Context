import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for meals or area"
          style={styles.searchInput}
        />
        <Text style={styles.filter}>Filter</Text>
      </View>

      {/* Top Categories */}
      <Text style={styles.sectionTitle}>Top Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryCard}>
          <Image
            source={require("./assets/pizza.jpg")}   // đổi ảnh tại đây
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Pizza</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require("./assets/burger.jpg")}  // đổi ảnh tại đây
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Burgers</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require("./assets/steak.jpg")}   // đổi ảnh tại đây
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Steak</Text>
        </View>
      </ScrollView>

      {/* Popular Items */}
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <View style={styles.itemCard}>
        <Image
          source={require("./assets/food1.jpg")}   // đổi ảnh tại đây
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Food 1</Text>
          <Text style={styles.itemSub}>By Viet Nam</Text>
          <Text style={styles.price}>1$</Text>
        </View>
      </View>

      <View style={styles.itemCard}>
        <Image
          source={require("./assets/food2.jpg")}   // đổi ảnh tại đây
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Food 2</Text>
          <Text style={styles.itemSub}>By Viet Nam</Text>
          <Text style={styles.price}>3$</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
  },

  filter: {
    marginLeft: 10,
    color: "orange",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  viewAll: {
    color: "orange",
  },

  categoryCard: {
    marginRight: 15,
    alignItems: "center",
  },

  categoryImage: {
    width: 100,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },

  categoryText: {
    fontSize: 14,
  },

  itemCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    alignItems: "center",
  },

  itemImage: {
    width: 90,
    height: 80,
    borderRadius: 10,
  },

  itemInfo: {
    marginLeft: 10,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  itemSub: {
    color: "#777",
    marginVertical: 5,
  },

  price: {
    fontWeight: "bold",
  },
});