import React from "react";
import { Text, View } from "react-native";
import Button from "../buttons";
import Screen from "../screen";
import { Styles } from "./styles";

function Main() {
  return (
    <View style={Styles.container}>
      <Screen />
      <Button />
    </View>
  );
}

export default Main;
