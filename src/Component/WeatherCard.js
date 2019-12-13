import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { WeatherPicker } from "./WeatherPicker";
import * as pix from "../Image/Weather";

class WeatherCard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "rgb(33,33,33)"
        }}
      >
        {/*Weather condition image*/}
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          <Image
            source={
              pix[`_${this.props.backImage}`] ||
              require("../Image/Weather/01d.jpg")
            }
            style={{
              flex: 1,
              resizeMode: "center"
            }}
          />
        </View>
        {/*City name & Weather condition*/}
        <View
          style={{
            flex: 1.15,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "rgb(33,33,33)"
          }}
        >
          {/*--------------------City name & temperature--------------------*/}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(42,42,42)",
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            {/*City name*/}
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                alignItems: "flex-start",
                alignSelf: "stretch",
                paddingLeft: 5
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "rgb(168,168,168)",
                  fontFamily: "Yekan"
                }}
              >
                {this.props.city}
              </Text>
            </View>
            {/*temperature*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                flexDirection: "row"
              }}
            >
              {/*temperature min*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  margin: 5,
                  marginEnd: 0,
                  flexDirection: "row"
                  //backgroundColor: "rgb(33,33,33)",
                  //borderRadius: 5
                }}
              >
                {/*temperature min text*/}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      color: "rgb(168,168,168)",
                      fontFamily: "Yekan"
                    }}
                  >
                    {this.props.min}
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "rgb(168,168,168)",
                      fontFamily: "Yekan"
                    }}
                  >
                    °
                  </Text>
                </View>
                {/*temperature min icon*/}
                <View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch"
                  }}
                >
                  <Image
                    source={require("../Image/14.png")}
                    style={{
                      width: 12,
                      resizeMode: "center",
                      tintColor: "rgb(226,177,50)"
                    }}
                  />
                </View>
              </View>
              {/*temperature max*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  margin: 5,
                  flexDirection: "row"
                  //backgroundColor: "rgb(33,33,33)",
                  //borderRadius: 5
                }}
              >
                {/*temperature max text*/}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      color: "rgb(168,168,168)",
                      fontFamily: "Yekan"
                    }}
                  >
                    {this.props.max}
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "rgb(168,168,168)",
                      fontFamily: "Yekan"
                    }}
                  >
                    °
                  </Text>
                </View>
                {/*temperature max icon*/}
                <View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch"
                  }}
                >
                  <Image
                    source={require("../Image/15.png")}
                    style={{
                      width: 12,
                      resizeMode: "center",
                      tintColor: "rgb(226,177,50)"
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/*weather condition*/}
          <View
            style={{
              flex: 1.8,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(42,42,42)",
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            {/*wind speed*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/*wind speed icon*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                <Image
                  source={require("../Image/17.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
              {/*wind speed text*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {this.props.windSpeed}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "rgb(168,168,168)"
                  }}
                >
                  {" " + "m/s"}
                </Text>
              </View>
            </View>
            {/*retaining view*/}
            <View
              style={{
                width: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)",
                marginVertical: 10
              }}
            />
            {/*wind degree*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/*wind degree icon*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                <Image
                  source={require("../Image/19.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
              {/*wind degree text*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {this.props.windDegree}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "rgb(168,168,168)"
                  }}
                >
                  °
                </Text>
              </View>
            </View>
            {/*retaining view*/}
            <View
              style={{
                width: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)",
                marginVertical: 10
              }}
            />
            {/*Weather condition text & icon*/}
            <View
              style={{
                flex: 1.8,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/*Weather condition icon*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginTop: 10
                }}
              >
                <Image
                  source={{
                    uri: `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "center"
                    //tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
              {/*Weather condition text*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch"
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {this.props.weatherCondition}
                </Text>
              </View>
            </View>
            {/*retaining view*/}
            <View
              style={{
                width: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)",
                marginVertical: 10
              }}
            />
            {/*Visibility*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/*Visibility icon*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                <Image
                  source={require("../Image/20.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
              {/*Visibility text*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {this.props.visibility}
                </Text>
              </View>
            </View>
            {/*retaining view*/}
            <View
              style={{
                width: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)",
                marginVertical: 10
              }}
            />
            {/*Humidity*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/*Humidity icon*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                <Image
                  source={require("../Image/16.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
              {/*Humidity text*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: "row"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {this.props.humidity}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "rgb(168,168,168)",
                    fontFamily: "Yekan"
                  }}
                >
                  {" " + "%"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { WeatherCard };
