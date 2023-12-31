import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ORCHIDS } from "../../data/orchids";
import { CATEGORIES } from "../../data/categories";
import ListProduct from "../../components/ListProduct";
import AppColor from "../../consts/colors";
import ListCatItem from "../../components/ListCatItem";

export default function HomeScreen({ navigation }) {
  const [chosenCat, setChosenCat] = useState("c0");

  let data;
  if (chosenCat === "c0") {
    data = ORCHIDS.filter((item) => item.rating === 5);
  } else if (!chosenCat) {
    data = ORCHIDS;
  } else if (chosenCat) {
    data = ORCHIDS.filter((item) => item.categoriId === chosenCat);
  }

  function selectCat(id) {
    setChosenCat(id);
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.headSection}>
        <Text style={styles.text2}>Phong Lan</Text>
      </View>
      <View style={styles.cat}>
        <Text style={[styles.textTitle, { marginLeft: 15 }]}>Phân loại</Text>
        <ListCatItem
          data={CATEGORIES}
          selectCat={selectCat}
          chosenCat={chosenCat}
        />
      </View>
      <View style={styles.product}>
        <Text style={styles.textTitle}>
          {chosenCat === "c0" ? "Phổ biến" : "Sản phẩm"}
        </Text>
        {chosenCat === undefined ? (
          <></>
        ) : (
          <TouchableOpacity onPress={() => setChosenCat(undefined)}>
            <Text style={styles.textViewAll}>Xem tất cả</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.listContainer}>
        <ListProduct data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headSection: {
    marginTop: 30,
    marginLeft: 30,
  },
  text1: {
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.4)",
  },
  text2: {
    fontSize: 50,
    fontWeight: "500",
    color: AppColor.blue,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
    marginLeft: 30,
  },
  cat: {
    marginTop: 25,
    marginHorizontal: 15,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 35,
  },
  textViewAll: {
    marginRight: 30,
    marginBottom: 15,
    color: "rgba(0,0,0,0.5)",
  },
  listContainer: {
    marginTop: 10,
  },
});
