import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { MyContext } from "../theme/ThemeContext";

// import AnalysisScreen from "./AnalysisScreen";
import DashboardScreen from "./DashboardScreen";
// import ExpensesScreen from "./ExpensesScreen";
// import ForecastScreen from "./ForecastScreen";

export default function HomeNav() {
  return (
    <MyContext.Consumer>
      {context => (
        <>
          <Button
            style={{ ...context.state.button }}
            title="DASHBOARD"
            type="clear"
          />
          <Button
            style={{ ...context.state.button }}
            title="ANALYSIS"
            type="clear"
          />
          <Button
            style={{ ...context.state.button }}
            title="EXPENSES"
            type="clear"
          />
          <Button
            style={{ ...context.state.button }}
            title="FORECAST"
            type="clear"
          />
        </>
      )}
    </MyContext.Consumer>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: 300
  }
});
