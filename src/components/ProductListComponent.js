import React, { Component } from "react";
import pic from "../assets/store.jpg";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

import { Actions } from "react-native-router-flux";

export default class ProductListComponent extends Component {
  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              price={item.price}
              details={item.details}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

function Item({ title, price, details }) {
  return (
    <TouchableOpacity onPress={Actions.product}>
      <View style={styles.container}>
        <Image source={pic} style={styles.image}></Image>
        <View style={styles.bg}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.div}>
          <Text numberOfLines={1} ellipsizeMode="clip">
            {title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="clip" style={styles.details}>
            {details}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    details: "First Item",
    price: "$49.99",
    title: "Eggs",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    details: "Second Item",
    price: "$99.49",
    title: "Cookie",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    details: "Third Item",
    price: "$32.50",
    title: "Milk",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2ds9d72",
    details: "Fourth Item",
    price: "$32.50",
    title: "Bread",
  },
];

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginTop: 20,
  },
  image: {
    borderRadius: 10,
    height: 125,
    width: 100,
  },
  details: {
    color: colors.secondary,
  },
  bg: {
    backgroundColor: colors.primary,
    position: "absolute",
    borderRadius: 50,
    top: 5,
    right: 16,
    paddingHorizontal: 10,
    padding: 4,
    color: "white",
  },
  div: {
    alignItems: "center",
    marginTop: 10,
    width: 100,
  },
});
