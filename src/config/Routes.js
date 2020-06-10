import React, { Component } from "react";

import ProductScreen from "../screens/ProductScreen";
import StoreScreen from "../screens/StoreScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

import { Router, Scene, Stack, Drawer } from "react-native-router-flux";
import DrawerComponent from "../components/DrawerComponent";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Drawer key="drawer" contentComponent={DrawerComponent}>
          <Stack hideNavBar key="root">
            <Scene key="home" component={HomeScreen} initial />
            <Scene key="product" component={ProductScreen} />
            <Scene key="store" component={StoreScreen} />
            <Scene key="map" component={MapScreen} />
          </Stack>
        </Drawer>
      </Router>
    );
  }
}
