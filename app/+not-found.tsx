import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>404 Page Not Found 😥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181818",
  },
  message: {
    fontSize: 24,
    color: "ffffff",
    fontFamily: "RedHatDisplay-medium",
  },
});
