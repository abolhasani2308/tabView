import React from "react";
import Router from "./Router";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Method `jumpToIndex` is"]);
YellowBox.ignoreWarnings(["Unable to symbolicate stack trace"]);
YellowBox.ignoreWarnings(["createTabNavigator is deprecated"]);
YellowBox.ignoreWarnings(["Failed child context"]);
YellowBox.ignoreWarnings([`perform a React state`]);

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
