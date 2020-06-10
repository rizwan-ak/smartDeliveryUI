import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";

import MapView from "react-native-maps";

import BottomNavComponent from "../components/BottomNavComponent";
import MapHeaderComponent from "../components/MapHeaderComponent";
import MapListComponent from "../components/MapListComponent";

export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <MapHeaderComponent />
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.mapStyle}
          />
          <View style={styles.listBg}>
            <MapListComponent />
          </View>
        </View>
        <BottomNavComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    zIndex: -1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  listBg: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 20,
  },
});
