import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import BottomNavComponent from "../components/BottomNavComponent";
import HeaderComponent from "../components/HeaderComponent";
import { Item, Input, Content, Icon, Badge } from "native-base";
import { FontAwesome, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import MapListComponent from "../components/MapListComponent";
import CategoriesListComponent from "../components/CategoriesListComponent";
import ProductListComponent from "../components/ProductListComponent";
import PopularListComponent from "../components/PopularListComponent";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <ScrollView style={styles.horizontalPadding}>
          <Content style={{ marginTop: 20 }}>
            <Item regular>
              <FontAwesome
                style={styles.horizontalPadding}
                name="search"
                size={24}
                color={colors.primary}
              />
              <Input placeholder="Search for marketor products" />
              <MaterialIcons
                style={styles.horizontalPadding}
                name="filter-list"
                size={24}
                color={colors.primary}
              />
            </Item>
          </Content>

          <View style={[styles.product, styles.myMargin]}>
            <MaterialIcons name="stars" size={24} color="black" />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24 }}>Top Markets</Text>
              <Text style={{ color: colors.secondary }}>
                Shop Hessel's Sons
              </Text>
            </View>

            <MaterialIcons
              style={{ marginLeft: "auto", margin: 20 }}
              name="my-location"
              size={24}
              color="black"
            />
          </View>

          <MapListComponent />

          <View style={[styles.product, styles.myMargin]}>
            <MaterialIcons name="trending-up" size={24} color="black" />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24 }}>Trending This Week</Text>
              <Text style={{ color: colors.secondary }}>
                Shop Hessel's Sons
              </Text>
            </View>
          </View>

          <ProductListComponent />

          <View style={[styles.product, styles.myMargin]}>
            <FontAwesome5 name="shapes" size={24} color="black" />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24 }}>Product Categories</Text>
            </View>
          </View>

          <CategoriesListComponent />

          <View style={[styles.product, styles.myMargin]}>
            <MaterialIcons name="trending-up" size={24} color="black" />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24 }}>Most Popular</Text>
            </View>
          </View>

          <PopularListComponent />
        </ScrollView>
        <BottomNavComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalPadding: {
    paddingHorizontal: 10,
  },
  product: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  myMargin: {
    marginTop: 25,
  },
});
