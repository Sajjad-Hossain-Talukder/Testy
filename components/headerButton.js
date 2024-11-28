import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function CustomButtonWithOnlyIcon({ name, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.onPressed}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

export default CustomButtonWithOnlyIcon;

const styles = StyleSheet.create({
  onPressed: {
    opacity: 0.5,
  },
});
