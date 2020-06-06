import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
// import { Button } from "react-native-elements";
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
          <TouchableOpacity style={{ ...context.state.button }}>
            <Text style={{ ...context.state.text }}>DASHBOARD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...context.state.button }}>
            <Text style={{ ...context.state.text }}>ANALYSIS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...context.state.button }}>
            <Text style={{ ...context.state.text }}>EXPENSES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...context.state.button }}>
            <Text style={{ ...context.state.text }}>FORECAST</Text>
          </TouchableOpacity>
        </>
      )}
    </MyContext.Consumer>
  );
}

// const styles = StyleSheet.create({
//   buttonStyle: {
//     borderColor: "white",
//     borderWidth: 1,
//     color: "white",
//     fontSize: 24,
//     fontWeight: "bold",
//     padding: 4,
//     textAlign: "center",
//     width: 300
//   }
// });
