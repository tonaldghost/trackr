import React, { Component } from "react";

export const themes = {
  light: {
    background: "#eeeeee",
    color: "#000000"
  },
  dark: {
    backgroundColor: "#222222",
    color: "#ffffff"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);

// export class MyProvider extends Component {
//   state = {
//     theme: themes.dark
//   };
//   render() {
//     return (
//       <ThemeContext.MyProvider value="im the value">
//         {this.props.children}
//       </ThemeContext.MyProvider>
//     );
//   }
// }
