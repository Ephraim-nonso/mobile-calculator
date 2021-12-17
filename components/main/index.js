import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../buttons";

import Top from "../top";
import { Styles } from "./styles";

function Main() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <View
      style={[
        Styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Top dark={darkMode} handleDarkMode={handleDarkMode} />
      <Button dark={darkMode} />
    </View>
  );
}

export default Main;
