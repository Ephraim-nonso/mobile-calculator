import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Styles } from "./styles";
import { TouchableOpacity } from "react-native";

function Top(props) {
  const { dark, handleDarkMode } = props;
  return (
    <View style={Styles.container}>
      <Text style={[Styles.title, { color: dark ? "white" : "black" }]}>
        Calculator
      </Text>

      <TouchableOpacity onPress={handleDarkMode}>
        <Ionicons
          name="moon-sharp"
          size={24}
          color={dark ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Top;
