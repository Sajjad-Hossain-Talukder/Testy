import { View, Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 4,
    borderBottomWidth: 1,
    borderColor: "#000000",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
});
