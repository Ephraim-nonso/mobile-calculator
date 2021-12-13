import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Styles } from "./styles";
import { TouchableOpacity } from "react-native";

function Button() {
  return (
    <View style={Styles.container}>
      {/* Buttons of the application */}
      <View style={Styles.keysConatiner}>
        <TouchableOpacity>
          <Text>C</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            <FontAwesome name="percent" size={24} color="black" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            <FontAwesome5 name="divide" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.keysConatiner}>
        <TouchableOpacity>
          <Text>7</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>8</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>9</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>X</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.keysConatiner}>
        <TouchableOpacity>
          <Text>4</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>5</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>6</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            <AntDesign name="minus" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.keysConatiner}>
        <TouchableOpacity>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <AntDesign name="plus" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.keysConatiner}>
        <TouchableOpacity>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <FontAwesome5 name="equals" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Button;
