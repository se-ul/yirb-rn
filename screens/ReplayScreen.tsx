import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { Text } from "../components/Themed";
export default function ReplayScreen() {
  return (
    <Screen title="λ€μ λ£κΈ°">
      <Layout style={styles.container}>
        <Text style={styles.title}>π§ μ€λΉ μ€μλλ€ π§</Text>
      </Layout>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
