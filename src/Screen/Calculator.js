import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Calculator extends Component {
  render() {
    //Introducing the Array of Buttons in Each Row
    const veiwEdithelp = ["View", "Edit", "Help"];
    const firstRowofButtons = ["MC", "MR", "MS", "M+", "M-"];
    const secondRowofButtons = ["←", "CE", "C", "±", "√"];
    const thirdRowofButtons = ["7", "8", "9", "/", "%"];
    const fourthRowofButtons = ["4", "5", "6", "*", "1/x"];
    const bottomPartfirstRow = ["1", "2", "3", "-"];
    const separateAndinAddition = [".", "+"];
    //Introducing Styles
    const buttonsViewstyle = {
      flex: 1,
      backgroundColor: "rgb(33,33,33)",
      alignSelf: "stretch",
      flexDirection: "row",
      marginHorizontal: 5,
      marginTop: 10,
      justifyContent: "space-between",
      alignItems: "flex-end"
    };
    const buttonsTouchableOpacityStyle = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "stretch",
      backgroundColor: "rgb(168,168,168)",
      borderRadius: 5,
      //borderWidth: 1,
      //borderColor: "rgb(226,177,50)",
      marginHorizontal: 5
    };
    const buttonsTextFontStyle = {
      fontSize: 20,
      color: "rgb(42,42,42)"
    };
    return (
      //Total View
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/*upper part(View - Edit - Help)*/}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(226,177,50)",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          {/*View Edit Help*/}
          <View
            style={{
              flex: 1,
              //backgroundColor: "rgb(225,246,248)",
              alignSelf: "stretch",
              flexDirection: "row",
              marginLeft: 15,
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            {veiwEdithelp.map(item => {
              return (
                <TouchableOpacity
                  key={item}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(226,177,50)"
                  }}
                >
                  <Text style={{ fontSize: 20, color: "rgb(42,42,42)" }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {/*Empty space*/}
          <View style={{ flex: 1, flexDirection: "row" }} />
        </View>
        {/*upper part (View - Edit - Help)*/}
        {/*Everything except the upper part*/}
        <View
          style={{
            flex: 14,
            backgroundColor: "rgb(33,33,33)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          {/*Input data*/}
          <View
            style={{
              flex: 1,
              backgroundColor: "rgb(168,168,168)",
              alignSelf: "stretch",
              flexDirection: "column",
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 10,
              //borderWidth: 1,
              borderRadius: 5,
              //borderColor: "rgb(35,45,49)",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 32,
                color: "rgb(42,42,42)",
                justifyContent: "flex-end"
              }}
            >
              0
            </Text>
          </View>
          {/*Input data*/}
          {/*Rows of buttons*/}
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "stretch",
              marginBottom: 20
            }}
          >
            {/*First row of buttons*/}
            <View style={buttonsViewstyle}>
              {firstRowofButtons.map(item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={buttonsTouchableOpacityStyle}
                  >
                    <Text style={buttonsTextFontStyle}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {/*Second row of buttons*/}
            <View style={buttonsViewstyle}>
              {secondRowofButtons.map(item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={buttonsTouchableOpacityStyle}
                  >
                    <Text style={buttonsTextFontStyle}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {/*Third row of buttons*/}
            <View style={buttonsViewstyle}>
              {thirdRowofButtons.map(item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={buttonsTouchableOpacityStyle}
                  >
                    <Text style={buttonsTextFontStyle}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {/*Fourth row of buttons*/}
            <View style={buttonsViewstyle}>
              {fourthRowofButtons.map(item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={buttonsTouchableOpacityStyle}
                  >
                    <Text style={buttonsTextFontStyle}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {/*Bottom part*/}
            {/*Total View Bottom part*/}
            <View
              style={{
                flex: 2.3,
                backgroundColor: "rgb(33,33,33)",
                alignSelf: "stretch",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginTop: 10,
                marginRight: 5,
                marginLeft: 5
              }}
            >
              {/*Part of 1 2 3 - 0 . + */}
              <View
                style={{
                  flex: 4,
                  alignSelf: "stretch",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                {/*Bottom part - first row*/}
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    marginBottom: 5
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "rgb(33,33,33)",
                      alignSelf: "stretch",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end"
                    }}
                  >
                    {bottomPartfirstRow.map(item => {
                      return (
                        <TouchableOpacity
                          key={item}
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "stretch",
                            backgroundColor: "rgb(168,168,168)",
                            borderRadius: 5,
                            //borderWidth: 1,
                            //borderColor: "rgb(35,45,49)",
                            marginHorizontal: 5
                          }}
                        >
                          <Text style={buttonsTextFontStyle}>{item}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                {/*Bottom part - second row*/}
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    marginTop: 5,
                    flexDirection: "row"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "stretch"
                    }}
                  >
                    {/*Zero*/}
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "rgb(33,33,33)",
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginLeft: 5,
                        marginRight: 5
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                          backgroundColor: "rgb(168,168,168)",
                          //borderColor: "rgb(35,45,49)",
                          borderRadius: 5
                          //borderWidth: 1
                        }}
                      >
                        <Text style={buttonsTextFontStyle}>0</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/*Separate and in addition*/}
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "stretch"
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "rgb(33,33,33)",
                        alignSelf: "stretch",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end"
                      }}
                    >
                      {separateAndinAddition.map(item => {
                        return (
                          <TouchableOpacity
                            key={item}
                            style={{
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              alignSelf: "stretch",
                              backgroundColor: "rgb(168,168,168)",
                              borderRadius: 5,
                              //borderWidth: 1,
                              //borderColor: "rgb(35,45,49)",
                              marginHorizontal: 5
                            }}
                          >
                            <Text style={buttonsTextFontStyle}>{item}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                </View>
              </View>
              {/*part of Equal*/}
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgb(33,33,33)",
                  alignSelf: "stretch",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(226,177,50)",
                    borderRadius: 5,
                    //borderWidth: 1,
                    //borderColor: "rgb(35,45,49)",
                    marginLeft: 5,
                    marginRight: 5
                  }}
                >
                  <Text style={buttonsTextFontStyle}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { Calculator };
