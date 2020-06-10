import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
import colors from "../config/colors";

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.drawerOpen}>
          <FontAwesome5 name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}> Maps Explorer </Text>
        <MaterialIcons name="filter-list" size={30} color="black" />
        <MaterialIcons name="my-location" size={30} color="black" />
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
    marginLeft: 30,
  },
});
