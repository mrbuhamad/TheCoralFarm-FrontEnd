import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button, Text, Badge } from "native-base";
import { View } from "react-native";

// Stores

import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  const handlePress = () =>
    cartStore.items
      ? navigation.navigate("CartScreen")
      : alert("Your Cart is empty, please add items");

  return (
    <Button onPress={handlePress} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "alignContent"
        }}
      >
        <Text style={{ fontSize: 14, color: "#696969", textAlign: "right" }}>
          {cartStore.quantity}
        </Text>

        <Icon
          name="shopping-cart"
          type="FontAwesome5"
          style={{
            color: "black",
            marginBottom: 10,
            fontSize: 20,
            marginLeft: 8
          }}
        />
      </View>
    </Button>
  );
};

export default withNavigation(observer(CartButton));
