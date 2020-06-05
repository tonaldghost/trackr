import React from "react";
import { Button } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default class ThemeButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <Button
        onPress={props.toggleTheme}
        title="Change Theme"
        {...props}
        style={{ backgroundColor: theme.background }}
      />
    );
  }
}
ThemeButton.contextType = ThemeContext;
