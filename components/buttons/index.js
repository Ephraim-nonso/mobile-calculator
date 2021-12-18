import React, { useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "./styles";
import Screen from "../screen";
import { TouchableOpacity } from "react-native";

function Button(props) {
  const { dark } = props;
  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [number, setNumber] = useState([]);

  const getValue = (event) => {
    // setNum(event._dispatchInstances.memoizedProps.children);
    // const numberDerived = event._dispatchInstances.memoizedProps.children;
    // setNumber([...number, numberDerived]);
    // for (let i = 0; i < numbers.length; i++) {
    //   if (numbers[i] === numberDerived) {
    // setNumber([...number, numberDerived]);
    //   }
    // }
    // if (numberDerived === "C") {
    //   // setNumber(number.slice(0, -1));
    //   setNumber("");
    // }
    // setNumber(num[numberDerived]);
  };

  return (
    <View>
      {/* This is the screen component below to send it values from the buttons */}
      <Screen number={number} dark={dark} />
      <View style={Styles.container}>
        {/* Buttons of the application */}
        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([])}
          >
            <Text style={Styles.text}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "+/-"])}
          >
            <Text style={Styles.text}>+/-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "%"])}
          >
            <Text style={Styles.text}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, Styles.brownKey]}
            onPress={() => setNumber([...number, "÷"])}
          >
            <Text style={[Styles.operationKeys, Styles.text]}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "7"])}
          >
            <Text style={Styles.text}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "8"])}
          >
            <Text style={Styles.text}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "9"])}
          >
            <Text style={Styles.text}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, Styles.brownKey]}
            onPress={() => setNumber([...number, "x"])}
          >
            <Text style={[Styles.operationKeys, Styles.text]}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "4"])}
          >
            <Text style={Styles.text}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "5"])}
          >
            <Text style={Styles.text}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "6"])}
          >
            <Text style={Styles.text}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.key, Styles.brownKey]}
            onPress={() => setNumber([...number, "-"])}
          >
            <Text style={[Styles.operationKeys, Styles.text]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.keysConatiner}>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "1"])}
          >
            <Text style={Styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "2"])}
          >
            <Text style={Styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, { backgroundColor: dark ? "#fff" : "#cccc" }]}
            onPress={() => setNumber([...number, "3"])}
          >
            <Text style={Styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, Styles.brownKey]}
            onPress={() => setNumber([...number, "+"])}
          >
            <Text style={[Styles.text, Styles.operationKeys]}>+</Text>
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
            onPress={() => setNumber([...number, "0"])}
          >
            <Text style={Styles.text}>0</Text>
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
            onPress={() => setNumber([...number, "."])}
          >
            <Text style={Styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.key, Styles.brownKey]}
            onPress={() => setNumber([...number, "="])}
          >
            <Text style={Styles.operationKeys}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Button;
