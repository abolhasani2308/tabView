import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

class Header extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "rgb(33,33,33)",
          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(42,42,42)",
            alignSelf: "stretch",
            marginVertical: 10
          }}
        ></View>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(42,42,42)",
            alignSelf: "stretch",
            marginVertical: 10
          }}
        >
          <Text
            style={{
              fontSize: 32,
              color: "rgb(226,177,50)",
              fontFamily: "Yekan"
            }}
          >
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "rgb(42,42,42)",
            alignSelf: "stretch",
            marginVertical: 10
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Image
              source={require("../Image/30.png")}
              style={{
                width: 35,
                height: 35,
                resizeMode: "center",
                tintColor: "rgb(226,177,50)",
                marginRight: 10
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export { Header };
