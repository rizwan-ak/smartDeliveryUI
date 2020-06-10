import React, { Component } from "react";
import pic from "../assets/store.jpg";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
} from "native-base";
import colors from "../config/colors";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default class PopularListComponent extends Component {
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
    <View style={styles.container}>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Image source={pic} style={{ height: 80, width: "100%" }} />
            <Text numberOfLines={1} ellipsizeMode="clip" style={styles.title}>
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
        </CardItem>
      </Card>
    </View>
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
    marginRight: 25,
    marginVertical: 20,
  },
  card: {
    width: 150,
  },
  title: {
    fontSize: 20,
    width: "100%",
  },
  stars: {
    flexDirection: "row",
    marginTop: 5,
  },
});
