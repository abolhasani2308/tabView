import React, { Component } from "react";
import { View, Text } from "react-native";

class SupportCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.who == false) {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            //borderTopRightRadius: 5,
            //borderTopLeftRadius: 5,
            //borderBottomLeftRadius: 5
            marginLeft: 30,
            marginBottom: 10,
            alignSelf: "flex-end"
          }}
        >
          <View
            style={{
              //height: 40,
              //alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(226,177,50)",
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(42,42,42)",
                marginHorizontal: 10
              }}
            >
              {this.props.message}
            </Text>
            <View
              style={{
                height: 10,
                alignSelf: "flex-end",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Yekan",
                  color: "rgb(42,42,42)",
                  marginBottom: 2
                }}
              >
                {this.props.time}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 20,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(226,177,50)"
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(33,33,33)",
                borderBottomLeftRadius: 10
              }}
            ></View>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row-reverse",
            //borderTopRightRadius: 5,
            //borderTopLeftRadius: 5,
            //borderBottomLeftRadius: 5
            marginLeft: 30,
            marginBottom: 10,
            alignSelf: "flex-start"
          }}
        >
          <View
            style={{
              //height: 40,
              //alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(168,168,168)",
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(42,42,42)",
                marginHorizontal: 10
              }}
            >
              {this.props.message}
            </Text>
            <View
              style={{
                height: 10,
                alignSelf: "flex-start",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Yekan",
                  color: "rgb(42,42,42)",
                  marginBottom: 2
                }}
              >
                {this.props.time}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 20,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(168,168,168)"
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(33,33,33)",
                borderBottomRightRadius: 10
              }}
            ></View>
          </View>
        </View>
      );
    }
  }
}
export { SupportCard };
