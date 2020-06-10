import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Badge } from "native-base";
import { Actions } from "react-native-router-flux";

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.drawerOpen}>
          <FontAwesome5 name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}> Smart Delivery </Text>
        <Ionicons name="md-cart" size={30} color="black" />
        <View style={styles.cartItem}>
          <Text style={{ fontSize: 10, color: "white" }}>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    padding: 10,
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
  },
  cartItem: {
    position: "absolute",
    justifyContent: "center",
    right: 16,
    top: 24,
    width: 15,
    height: 15,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 1,
  },
});
