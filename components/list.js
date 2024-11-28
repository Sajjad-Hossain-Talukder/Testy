import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return (
    <View style={styles.container}>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.textContainer}>
          {/* <View style={styles.bulletPoint}> </View> */}
          <Text style={styles.text}> {dataPoint} </Text>
        </View>
      ))}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 6,
  },
  bulletPoint: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: "black",
  },
  textContainer: {
    backgroundColor: "#fffdfd",
    padding: 4,
    marginVertical: 2,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
});
