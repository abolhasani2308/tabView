import React, { Component } from "react";
import { View, Text } from "react-native";

class FootballCard extends Component {
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
        {/*--------------------Top part--------------------*/}
        <View
          style={{
            flex: 1.5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          {/*away part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/*away name*/}
            <View
              style={{
                flex: 5,
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
                  color: "rgb(226,177,50)",
                  textAlign: "left"
                }}
              >
                {this.props.away}
              </Text>
            </View>
            {/*away Goal*/}
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
                  color: "rgb(226,177,50)"
                }}
              >
                {this.props.awayGoals}
              </Text>
            </View>
          </View>
          {/*retaining View*/}
          <View
            style={{
              width: 10,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(226,177,50)"
              }}
            >
              -
            </Text>
          </View>
          {/*Home part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/*Home Goal*/}
            <View
              style={{
                flex: 1,
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
                  color: "rgb(226,177,50)"
                }}
              >
                {this.props.homeGoals}
              </Text>
            </View>
            {/*Home Name*/}
            <View
              style={{
                flex: 4.5,
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
                  color: "rgb(226,177,50)",
                  textAlign: "right"
                }}
              >
                {this.props.home}
              </Text>
            </View>
          </View>
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
        {/*--------------------Bottom part--------------------*/}
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          {/*remaining time part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {this.props.children}
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
          {/*league part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/*league Name*/}
            <View
              style={{
                flex: 2,
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
                {this.props.league}
              </Text>
            </View>
            {/*Text league*/}
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
                لیگ
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { FootballCard };
