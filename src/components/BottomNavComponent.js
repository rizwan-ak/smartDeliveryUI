import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class BottomNavComponent extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <MaterialCommunityIcons
          name="bell"
          size={24}
          color={colors.secondary}
        />
        <TouchableOpacity onPress={Actions.map}>
          <FontAwesome name="map-marker" size={24} color={colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.home}>
          <View style={styles.home}>
            <MaterialIcons name="home" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.store}>
          <Fontisto name="shopping-bag" size={24} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.product}>
          <FontAwesome name="heart" size={24} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 7,
  },
  home: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
