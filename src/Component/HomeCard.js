import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class HomeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          width: 106.5,
          height: 131,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(42,42,42)",
          //marginBottom: 10,
          marginTop: 10,
          marginHorizontal: 5
        }}
        onPress={() => {}}
      >
        <View
          style={{
            width: 110,
            height: 90,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 50, height: 50, tintColor: "rgb(168,168,168)" }}
            source={this.props.icon}
          ></Image>
        </View>
        <View
          style={{
            width: 110,
            height: 5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        ></View>
        <View
          style={{
            width: 110,
            height: 36,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(168,168,168)"
            }}
          >
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export { HomeCard };
