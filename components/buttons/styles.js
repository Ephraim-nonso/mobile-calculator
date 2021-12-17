import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "75%",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  keysConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  key: {
    backgroundColor: "#cccc",
    width: 70,
    height: 70,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: "red",
  },

  brownKey: {
    backgroundColor: "#e6862e",
  },

  operationKeys: {
    color: "#ffffff",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});
