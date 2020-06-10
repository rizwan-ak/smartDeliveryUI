import React, { Component } from "react";
import pic from "../assets/store.jpg";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
} from "native-base";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";

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
    <View style={styles.container}>
      <View style={styles.div}>
        <View style={styles.icon}>
          <FontAwesome5
            name="prescription-bottle-alt"
            size={60}
            color={colors.primary}
          />
        </View>
        <Text numberOfLines={1} ellipsizeMode="clip" style={{ marginTop: 10 }}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    details: "First Item",
    title: "Eggs",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    details: "Second Item",
    title: "Cookie",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    details: "Third Item",
    title: "Milk",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2ds9d72",
    details: "Fourth Item",
    title: "Bread",
  },
];

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginTop: 20,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 100,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.94,
    shadowRadius: 9.27,

    elevation: 3,
  },
  div: {
    alignItems: "center",
    width: 80,
  },
});
