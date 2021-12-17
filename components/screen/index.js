import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";

function Screen({ number, dark }) {
  console.log(number);
  return (
    <View style={Styles.container}>
      <Text style={[Styles.text, { color: dark ? "white" : "black" }]}>
        {number}
      </Text>
    </View>
  );
}

export default Screen;
