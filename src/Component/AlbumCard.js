import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

class AlbumCard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "snow",
          alignSelf: "stretch",
          backgroundColor: "rgb(33,33,33)",
          marginBottom: 10
        }}
      >
        {/*Image Card*/}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            width: 300
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignItems: "center",
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: "rgb(226,177,50)"
            }}
            resizeMode="stretch"
            source={{ uri: this.props.image }}
          />
        </View>
        {/*Singer and Album*/}
        <View
          style={{
            height: 40,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "colorless",
            backgroundColor: "rgb(42,42,42)",
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(168,168,168)"
            }}
          >
            {"خواننده:" + " " + this.props.singer}
          </Text>
        </View>
        <View
          style={{
            height: 40,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "colorless",
            backgroundColor: "rgb(42,42,42)",
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(168,168,168)"
            }}
          >
            {"آلبوم:" + " " + this.props.album}
          </Text>
        </View>
        {/*Buy button*/}
        <TouchableOpacity
          style={{
            height: 40,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(226,177,50)",
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10
          }}
          onPress={() => {
            Linking.openURL(this.props.url);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(42,42,42)"
            }}
          >
            خرید
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { AlbumCard };
