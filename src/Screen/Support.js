import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { SupportCard } from "../Component";
import { Loading } from "../Component";
import Axios from "axios";

class Support extends Component {
  constructor() {
    super();

    this.state = {
      chats: [],
      message: "",
      isSupport: "",
      isLoading: "true"
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("chats")
      .then(r => {
        if (r) {
          this.setState({ chats: JSON.parse(r) });
        } else {
          () => {};
        }
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading == "true") {
      return <Loading></Loading>;
    } else {
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
          <View
            style={{
              flex: 4,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(33,33,33)"
            }}
          >
            <FlatList
              style={{ flex: 1, alignSelf: "stretch" }}
              data={this.state.chats}
              renderItem={({ item }) => {
                return (
                  <SupportCard
                    message={item.text}
                    time={item.time}
                    who={item.isSupport}
                  ></SupportCard>
                );
              }}
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              inverted
            ></FlatList>
            <View
              style={{
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <TextInput
                ref={input => {
                  this.input = input;
                }}
                style={{
                  flex: 1,
                  textAlignVertical: "center",
                  textAlign: "right",
                  alignSelf: "stretch",
                  color: "rgb(42,42,42)",
                  fontSize: 20,
                  fontFamily: "Yekan",
                  paddingLeft: 10,
                  fontSize: 20
                }}
                placeholder="پیام خود را وارد نمایید..."
                placeholderTextColor="rgb(42,42,42)"
                value={this.state.message}
                onChangeText={message => this.setState({ message })}
              />
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 30,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => {
                  this.input.clear();

                  let newChats = this.state.chats;
                  let currentTime = new Date();
                  let hour = currentTime.getHours();
                  let minutes = currentTime.getMinutes();

                  newChats.unshift({
                    text: this.state.message,
                    time: hour + ":" + minutes,
                    isSupport: this.state.isSupport
                  });

                  this.setState({ chats: newChats, message: "" });
                  this.setState({ isSupport: !this.state.isSupport });

                  AsyncStorage.setItem("chats", JSON.stringify(newChats))
                    .then(() => {})
                    .catch(error => alert(error));
                }}
                disabled={this.state.message == "" ? true : false}
              >
                <Image
                  source={require("../Image/12.png")}
                  style={{
                    width: 20,
                    height: 20,
                    //justifyContent: "center",
                    //alignItems: "center",
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)",
                    opacity: this.state.message == "" ? 0 : 1
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*Refresh Fab*/}
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              position: "absolute",
              bottom: 2.5,
              left: 0
            }}
            onPress={() => {
              this.setState({ chats: [], isSupport: false });
              AsyncStorage.removeItem("chats")
                .then(() => {})
                .catch(error => alert(error));
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                tintColor: "rgb(226,177,50)"
              }}
              source={require("../Image/29.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export { Support };
