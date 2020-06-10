import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import pic from "../assets/tomato.jpg";
import colors from "../config/colors";
import { Badge } from "native-base";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class ProductScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={pic} style={styles.image}>
          <View style={styles.backIcon}>
            <TouchableOpacity onPress={Actions.pop}>
              <AntDesign name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.cartIcon, styles.myBg, { width: 48, height: 48 }]}
          >
            <TouchableOpacity onPress={() => console.log("Cart Pressed")}>
              <Ionicons name="md-cart" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ScrollView style={[styles.details, { backgroundColor: "#F6F6F6" }]}>
          <View style={styles.product}>
            <Text style={styles.productTitle}>Vinegar</Text>
            <Text style={styles.productPrice}>$75</Text>
          </View>
          <View style={styles.product}>
            <Text>Market, Metz and Trophy</Text>
            <Text style={{ textDecorationLine: "line-through" }}>$75</Text>
          </View>
          <View style={styles.myMargin}>
            <View style={styles.product}>
              <View style={{ flexGrow: 1 }}>
                <Badge style={{ backgroundColor: colors.orange }}>
                  <Text style={styles.whiteText}>Not Deliveable</Text>
                </Badge>
              </View>
              <Badge
                style={{ marginRight: 5, backgroundColor: colors.secondary }}
              >
                <Text style={styles.whiteText}>97.8 g</Text>
              </Badge>
              <Badge style={{ backgroundColor: colors.secondary }}>
                <Text style={styles.whiteText}>2 Items</Text>
              </Badge>
            </View>
          </View>
          <Text style={{ marginTop: 30 }}>
            SME (on behalf of Columbia); BMI - Broadcast Music Inc., AMRA,
            LatinAutor - UMPG, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM,
            LatinAutor, UMPG Publishing, Sony ATV Publishing.
          </Text>
          <View style={styles.myMargin}>
            <TouchableOpacity onPress={() => console.log("Options Pressed")}>
              <View style={styles.product}>
                <Text style={{ paddingTop: 20, padding: 10 }}>
                  <Entypo name="circle-with-plus" size={24} color="black" />
                </Text>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productTitle}>Options</Text>
                  <Text style={{ color: colors.secondary }}>
                    Select options to add them on the product
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log("Cart Pressed")}>
            <View style={[styles.product, styles.myMargin]}>
              <Text style={styles.myPadding}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </Text>
              <View style={{ flexGrow: 1 }}>
                <Text style={styles.productTitle}>Size</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.fixedAtBottom}>
          <View style={[styles.product, styles.myMargin]}>
            <Text style={styles.productTitle}>Quantity</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={() => console.log("Minus Pressed")}
              >
                <AntDesign name="minuscircleo" size={22} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 30, marginHorizontal: 8 }}>2.0</Text>
              <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={() => console.log("Plus Pressed")}
              >
                <AntDesign name="pluscircleo" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.product, styles.myMargin]}>
            <TouchableOpacity onPress={() => console.log("Heart Pressed")}>
              <Text style={styles.myBg}>
                <AntDesign name="heart" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.myBg,
                {
                  flexGrow: 1,
                  marginLeft: 10,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => console.log("Add to Cart Pressed")}
              >
                <View style={styles.product}>
                  <Text style={styles.whiteText}>Add to cart</Text>
                  <Text style={styles.whiteText}>$15.75</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    bottom: 0,
    paddingBottom: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
