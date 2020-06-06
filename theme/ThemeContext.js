import React, { Component } from "react";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const themes = [
  {
    //light
    backgroundColor: "#eeeeee",
    color: "#000000"
  },
  {
    //dark
    backgroundColor: "#222222",
    color: "#ffffff"
  },
  {
    //hippie
    backgroundColor: "#F3B324",
    color: "#6170A7"
  },
  {
    //pink
    backgroundColor: "#eeeeee",
    color: "#ffc0cb"
  }
];

export const buttons = [
  {
    //light
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: windowWidth * 0.8,
    marginBottom: 16
  },
  {
    //dark
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: windowWidth * 0.8,
    marginBottom: 16
  },
  {
    //hippie
    borderColor: "#6170A7",
    borderWidth: 3,
    borderRadius: 8,
    color: "#6170A7",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: windowWidth * 0.8,
    marginBottom: 16
  },
  {
    //pink
    borderColor: "#FF8DA1",
    borderWidth: 3,
    borderRadius: 8,
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: windowWidth * 0.8,
    marginBottom: 16
  }
];

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    theme: themes[0],
    button: buttons[0]
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeTheme: () => {
            switch (this.state.theme) {
              case themes[0]:
                return this.setState({
                  theme: themes[1],
                  button: buttons[1]
                });
              case themes[1]:
                return this.setState({
                  theme: themes[2],
                  button: buttons[2]
                });
              case themes[2]:
                return this.setState({
                  theme: themes[3],
                  button: buttons[3]
                });
              case themes[3]:
                return this.setState({
                  theme: themes[0],
                  button: buttons[0]
                });
            }
          }
          // this.setState({
          // button:
          //   this.state.button === buttons.dark
          //     ? buttons.light
          //     : buttons.dark
          //     })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
