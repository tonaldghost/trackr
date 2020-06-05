import React from "react";
import { StyleSheet, Button } from "react-native";

import AnalysisScreen from "../screens/AnalysisScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ExpensesScreen from "../screens/ExpensesScreen";
import ForecastScreen from "../screens/ForecastScreen";

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
