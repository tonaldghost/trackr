import React from "react";
import { StyleSheet, Button } from "react-native";

// import AnalysisScreen from "./AnalysisScreen";
import DashboardScreen from "./DashboardScreen";
// import ExpensesScreen from "./ExpensesScreen";
// import ForecastScreen from "./ForecastScreen";

export default function HomeNav() {
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
