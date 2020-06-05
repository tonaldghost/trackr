import React from "react";
import { StyleSheet, Button } from "react-native";

export default function HomePage() {
  return (
    <>
      <Button title="Dashboard" />
      <Button title="Analysis" />
      <Button title="Expenses" />
      <Button title="Forecast" />
    </>
  );
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
}
