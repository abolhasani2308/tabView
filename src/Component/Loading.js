import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(33,33,33)"
        }}
      >
        <Image
          source={require("../Image/loading.gif")}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "center",
            tintColor: "rgb(226,177,50)"
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "rgb(226,177,50)",
            fontFamily: "Yekan"
          }}
        >
          در حال دریافت اطلاعات ...
        </Text>
      </View>
    );
  }
}
export { Loading };
