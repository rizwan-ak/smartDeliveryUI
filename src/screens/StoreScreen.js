import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import pic from "../assets/store.jpg";
import colors from "../config/colors";
import { Badge } from "native-base";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class StoreScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image source={pic} style={styles.image}></Image>
            <View style={styles.backIcon}>
              <TouchableOpacity onPress={Actions.pop}>
                <AntDesign name="arrowleft" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.cartIcon, styles.myBg, { width: 48, height: 48 }]}
            >
              <Ionicons name="md-cart" size={30} color="white" />
            </View>
            <View
              style={[
                styles.details,
                { backgroundColor: "#F6F6F6", paddingBottom: 20 },
              ]}
            >
              <View style={styles.product}>
                <Text style={styles.productTitle}>Shop Hessel's Sons</Text>
                <Badge style={{ backgroundColor: colors.primary }}>
                  <Text style={styles.whiteText}>
                    3.0
                    <EvilIcons name="star" size={16} color="white" />
                  </Text>
                </Badge>
              </View>

              <View style={styles.myMargin}>
                <View
                  style={[styles.product, { justifyContent: "flex-start" }]}
                >
                  <Badge success style={{ marginRight: 5 }}>
                    <Text style={styles.whiteText}>Open</Text>
                  </Badge>
                  <Badge style={{ backgroundColor: colors.orange }}>
                    <Text style={styles.whiteText}>PickUp</Text>
                  </Badge>

                  <View style={{ marginLeft: "auto" }}>
                    <Badge style={{ backgroundColor: colors.secondary }}>
                      <Text style={styles.whiteText}>90.34 KM</Text>
                    </Badge>
                  </View>
                </View>
              </View>
              <Text style={{ marginTop: 20 }}>
                SME (on behalf of Columbia); BMI - Broadcast Music Inc., AMRA,
                LatinAutor - UMPG, UNIAO BRASILEIRA DE EDITORAS DE MUSICA -
                UBEM, LatinAutor, UMPG Publishing, Sony ATV Publishing.
              </Text>

              <FlatList
                data={DATA}
                horizontal={true}
                renderItem={({ item }) => <Item title={item.src} />}
                keyExtractor={(item) => item.id}
              />

              <View style={[styles.product, styles.myMargin]}>
                <Text style={styles.myPadding}>
                  <MaterialIcons name="stars" size={24} color="black" />
                </Text>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productTitle}>Information</Text>
                </View>
              </View>

              <Text style={{ marginTop: 20 }}>
                SME (on behalf of Columbia); BMI - Broadcast Music Inc., AMRA,
                LatinAutor - UMPG, UNIAO BRASILEIRA DE EDITORAS DE MUSICA -
                UBEM, LatinAutor, UMPG Publishing, Sony ATV Publishing.
              </Text>

              <View
                style={[styles.product, styles.myMargin, { marginTop: 30 }]}
              >
                <View style={{ flexGrow: 1 }}>
                  <Text>500 South Buena Vista Street, Burbank,</Text>
                  <Text>California , United States</Text>
                </View>
                <View style={[styles.myBg, { width: 48, height: 48 }]}>
                  <MaterialCommunityIcons
                    name="directions"
                    size={30}
                    color="white"
                  />
                </View>
              </View>

              <View
                style={[styles.product, styles.myMargin, { marginTop: 30 }]}
              >
                <View style={{ flexGrow: 1 }}>
                  <Text>(042) 111 001 007</Text>
                  <Text>(042) 111 001 007</Text>
                </View>
                <View style={[styles.myBg, { width: 48, height: 48 }]}>
                  <MaterialIcons name="phone" size={30} color="white" />
                </View>
              </View>

              <View style={[styles.product, styles.myMargin]}>
                <Text style={styles.myPadding}>
                  <MaterialIcons
                    name="shopping-basket"
                    size={24}
                    color="black"
                  />
                </Text>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productTitle}>Featured Products</Text>
                </View>
              </View>

              <View
                style={[
                  styles.product,
                  styles.myMargin,
                  { justifyContent: "flex-start", alignItems: "center" },
                ]}
              >
                <Image
                  style={{ width: 75, height: 75, borderRadius: 3 }}
                  source={pic}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 24 }}>Pasta</Text>
                  <Text style={{ color: colors.secondary }}>
                    Shop Hessel's Sons
                  </Text>
                </View>
                <Text style={[styles.productTitle, { marginLeft: "auto" }]}>
                  $67.95
                </Text>
              </View>
              <View
                style={[
                  styles.product,
                  styles.myMargin,
                  { justifyContent: "flex-start", alignItems: "center" },
                ]}
              >
                <Image
                  style={{ width: 75, height: 75, borderRadius: 3 }}
                  source={pic}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 24 }}>Pasta</Text>
                  <Text style={{ color: colors.secondary }}>
                    Shop Hessel's Sons
                  </Text>
                </View>
                <Text style={[styles.productTitle, { marginLeft: "auto" }]}>
                  $67.95
                </Text>
              </View>

              <View
                style={[
                  styles.product,
                  styles.myMargin,
                  { marginVertical: 20 },
                ]}
              >
                <Text style={styles.myPadding}>
                  <MaterialIcons name="people" size={24} color="black" />
                </Text>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productTitle}>What They Say?</Text>
                </View>
              </View>

              <View
                style={[
                  styles.product,
                  styles.myMargin,
                  { justifyContent: "flex-start", alignItems: "center" },
                ]}
              >
                <Image
                  style={{ width: 55, height: 55, borderRadius: 50 }}
                  source={pic}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 24 }}>Alex Bexter</Text>
                  <Text style={{ color: colors.secondary }}>
                    Shop Hessel's Sons
                  </Text>
                </View>

                <Badge
                  style={{
                    marginLeft: "auto",
                    backgroundColor: colors.primary,
                  }}
                >
                  <Text style={styles.whiteText}>
                    3.0
                    <EvilIcons name="star" size={16} color="white" />
                  </Text>
                </Badge>
              </View>

              <Text style={{ marginTop: 20 }}>
                SME (on behalf of Columbia); BMI - Broadcast Music Inc., AMRA,
                LatinAutor - UMPG, UNIAO BRASILEIRA DE EDITORAS DE MUSICA -
                UBEM, LatinAutor, UMPG Publishing, Sony ATV Publishing.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.fixedAtBottom, styles.myBg]}>
          <Text style={[styles.whiteText, { fontSize: 24 }]}>
            <MaterialIcons name="shopping-basket" size={24} color="white" />{" "}
            Shopping
          </Text>
        </View>
      </View>
    );
  }
}

function Item({ title }) {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.listImg} source={pic}></Image>
    </View>
  );
}
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src: "../assets/store.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    src: "../assets/store.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    src: "../assets/store.jpg",
  },
];

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  listImg: {
    borderRadius: 5,
    width: 250,
    height: 150,
  },
  myMargin: {
    marginTop: 10,
  },
  myBg: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
  },
  myPadding: {
    padding: 10,
  },
  image: {
    height: Dimensions.get("screen").height * 0.4,
    resizeMode: "cover",
    justifyContent: "center",
  },
  cartIcon: {
    color: "grey",
    position: "absolute",
    top: 25,
    right: 25,
    fontSize: 30,
    fontWeight: "bold",
  },
  backIcon: {
    color: "grey",
    position: "absolute",
    top: 25,
    left: 25,
    fontSize: 25,
    fontWeight: "bold",
  },
  details: {
    flex: 2,
    padding: 10,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whiteText: {
    color: "white",
    padding: 4,
  },
  productTitle: {
    fontSize: 28,
  },
  productPrice: {
    fontSize: 25,
    color: colors.primary,
  },
  fixedAtBottom: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
