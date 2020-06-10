import React, { Component } from "react";
import pic from "../assets/store.jpg";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, CardItem, Body, Badge } from "native-base";
import colors from "../config/colors";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class MapListComponent extends Component {
  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

function Item({ title }) {
  return (
    <TouchableOpacity onPress={Actions.store}>
      <View style={{ paddingHorizontal: 10 }}>
        <Card style={styles.card}>
          <Image
            source={pic}
            style={[styles.card, { height: 180, width: 280 }]}
          />
          <View style={[styles.product, { justifyContent: "flex-start" }]}>
            <Badge success style={{ marginHorizontal: 10 }}>
              <Text style={styles.whiteText}>Open</Text>
            </Badge>
            <Badge style={{ backgroundColor: colors.orange }}>
              <Text style={styles.whiteText}>PickUp</Text>
            </Badge>
          </View>
          <CardItem>
            <Body>
              <Text numberOfLines={1} ellipsizeMode="clip" style={styles.title}>
                Shop Hessel's Sons
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="clip"
                style={{ color: colors.secondary, width: 150 }}
              >
                Shop Hessel's Sons
              </Text>
              <View style={styles.stars}>
                <FontAwesome
                  style={{ marginRight: 3 }}
                  name="star"
                  size={18}
                  color="orange"
                />
                <FontAwesome
                  style={{ marginRight: 3 }}
                  name="star"
                  size={18}
                  color="orange"
                />
                <FontAwesome
                  style={{ marginRight: 3 }}
                  name="star"
                  size={18}
                  color="orange"
                />
                <FontAwesome
                  style={{ marginRight: 3 }}
                  name="star"
                  size={18}
                  color="orange"
                />
                <FontAwesome
                  style={{ marginRight: 3 }}
                  name="star-o"
                  size={18}
                  color="orange"
                />
              </View>
            </Body>
            <View>
              <View style={styles.bg}>
                <MaterialCommunityIcons
                  name="directions"
                  size={24}
                  color="white"
                />
              </View>
              <Text>97.75 KM</Text>
            </View>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    width: 180,
  },
  bg: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    marginTop: 5,
  },
  product: {
    position: "absolute",
    top: 145,
    flexDirection: "row",
  },
  whiteText: {
    color: "white",
    padding: 4,
  },
});
