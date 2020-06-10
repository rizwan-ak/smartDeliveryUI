import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import pic from "../assets/store.jpg";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class DrawerComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={pic} />
          <Text style={styles.name}>Alex Bexter</Text>
          <Text style={styles.email}>client@demo.com</Text>
        </View>

        <TouchableOpacity onPress={Actions.home}>
          <View style={[styles.product, styles.myMargin]}>
            <MaterialIcons name="home" size={26} color={colors.secondary} />
            <Text style={styles.item}>Home</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialCommunityIcons
            name="bell"
            size={26}
            color={colors.secondary}
          />
          <Text style={styles.item}>Notifications</Text>
        </View>

        <TouchableOpacity onPress={Actions.store}>
          <View style={[styles.product, styles.myMargin]}>
            <Fontisto name="shopping-bag" size={26} color={colors.secondary} />
            <Text style={styles.item}>My Orders</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.product}>
          <View style={[styles.product, styles.myMargin]}>
            <FontAwesome name="heart" size={26} color={colors.secondary} />
            <Text style={styles.item}>Favourite Products</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.otherText}>Application Preferences</Text>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialIcons
            name="help-outline"
            size={26}
            color={colors.secondary}
          />
          <Text style={styles.item}>Help & Support</Text>
        </View>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialIcons name="settings" size={26} color={colors.secondary} />
          <Text style={styles.item}>Settings</Text>
        </View>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialIcons name="translate" size={26} color={colors.secondary} />
          <Text style={styles.item}>Languages</Text>
        </View>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialIcons
            name="brightness-6"
            size={26}
            color={colors.secondary}
          />
          <Text style={styles.item}>Dark Mode</Text>
        </View>

        <View style={[styles.product, styles.myMargin]}>
          <MaterialCommunityIcons
            name="logout-variant"
            size={26}
            color={colors.secondary}
          />
          <Text style={styles.item}>Log Out</Text>
        </View>

        <Text style={styles.otherText}>Version 1.0.0</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#dff2ec",
  },
  image: {
    borderRadius: 50,
    width: 75,
    height: 75,
    marginVertical: 15,
  },
  name: {
    color: colors.primary,
    fontSize: 30,
  },
  email: {
    color: colors.secondary,
    fontSize: 20,
  },
  item: {
    fontSize: 22,
    marginLeft: 30,
  },
  product: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  myMargin: {
    margin: 10,
  },
  otherText: {
    fontSize: 16,
    margin: 10,
  },
});
