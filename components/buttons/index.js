import React, { useState } from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles } from "./styles";
import Screen from "../screen";
import { TouchableOpacity } from "react-native";

function Button(props) {
  const { dark } = props;
  const [num, setNum] = useState(0);

  const getValue = (event) => {
    // console.log(event._dispatchInstances.memoizedProps.children);
    setNum(event._dispatchInstances.memoizedProps.children);
  };

  return (
    <View>
      {/* This is the screen component below to send it values from the buttons */}
      <Screen number={num} dark={dark} />
      <View style={Styles.container}>
        {/* Buttons of the application */}
        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              C
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              +/-
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              %
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Styles.key, Styles.brownKey]}>
            <Text
              onPress={getValue}
              style={[Styles.operationKeys, Styles.text]}
            >
              <FontAwesome5 name="divide" size={24} color="white" />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              7
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              8
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              9
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Styles.key, Styles.brownKey]}>
            <Text
              onPress={getValue}
              style={[Styles.operationKeys, Styles.text]}
            >
              X
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              4
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              5
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              6
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Styles.key, Styles.brownKey]}>
            <Text
              onPress={getValue}
              style={[Styles.operationKeys, Styles.text]}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
          >
            <Text onPress={getValue} style={Styles.text}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.key, Styles.brownKey]}>
            <Text
              onPress={getValue}
              style={Styles.text}
              style={Styles.operationKeys}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[
              Styles.key,
              {
                flex: 2,
                marginRight: 10,
                backgroundColor: dark ? "#fff" : "#cccc",
              },
            ]}
          >
            <Text onPress={getValue} style={Styles.text}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.key,
              {
                marginRight: 10,
                marginLeft: 5,
                backgroundColor: dark ? "#fff" : "#cccc",
              },
            ]}
          >
            <Text onPress={getValue} style={Styles.text}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.key, Styles.brownKey]}>
            <Text style={Styles.operationKeys}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Button;
