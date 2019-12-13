import React, { Component } from "react";
import { View, Text } from "react-native";

class CurrencyCard extends Component {
  render() {
    return (
      <View
        style={{
          height: 110,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(42,42,42)",
          borderRadius: 5,
          flexDirection: "column",
          //marginBottom: 5,
          marginBottom: this.props.space,
          marginTop: 10,
          marginHorizontal: 10
        }}
      >
        {/*--------------------Name part--------------------*/}
        <View
          style={{
            flex: 1.5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/*Name Text*/}
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(226,177,55)"
            }}
          >
            {this.props.name}
          </Text>
        </View>
        {/*retaining View*/}
        <View
          style={{
            height: 5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        ></View>
        {/*--------------------sell & buy part--------------------*/}
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          {/*sell part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/*Number sell*/}
            <View
              style={{
                flex: 1.7,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: 5
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Yekan",
                  color: "rgb(168,168,168)"
                }}
              >
                {this.props.sell}
              </Text>
            </View>
            {/*Text sell*/}
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: 5
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Yekan",
                  color: "rgb(168,168,168)"
                }}
              >
                فروش
              </Text>
            </View>
          </View>
          {/*retaining View*/}
          <View
            style={{
              width: 5,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(33,33,33)"
            }}
          ></View>
          {/*buy part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/*Number buy*/}
            <View
              style={{
                flex: 1.7,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: 5
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Yekan",
                  color: "rgb(168,168,168)"
                }}
              >
                {this.props.buy}
              </Text>
            </View>
            {/*Text buy*/}
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: 5
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Yekan",
                  color: "rgb(168,168,168)"
                }}
              >
                خریــد
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { CurrencyCard };

class CurrencyCardItem extends Component {
  render() {
    return (
      <View
        style={{
          height: 110,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(42,42,42)",
          borderRadius: 5,
          flexDirection: "column",
          //marginBottom: 5,
          marginBottom: this.props.space,
          marginTop: 10,
          marginHorizontal: 10
        }}
      >
        {/*Name part*/}
        <View
          style={{
            flex: 1.5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/*Name Text*/}
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(226,177,55)"
            }}
          >
            {this.props.name}
          </Text>
        </View>
        {/*retaining View*/}
        <View
          style={{
            height: 5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        ></View>
        {/*Rate part*/}
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          {/*Number buy*/}
          <View
            style={{
              flex: 1.7,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: 5
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(168,168,168)"
              }}
            >
              {this.props.rate}
            </Text>
          </View>
          {/*Text buy*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 5
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(168,168,168)"
              }}
            >
              نــــرخ
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export { CurrencyCardItem };
