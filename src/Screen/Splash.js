import React, { Component } from "react";
import { View, Text, AsyncStorage, Image } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.loadToken();
  }

  loadToken() {
    AsyncStorage.getItem("token")
      .then(token => {
        if (token) {
          this.props.navigation.navigate("_RootStack");
        } else {
          this.props.navigation.navigate("_AuthStack");
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(33,33,33)"
        }}
      >
        <View
          style={{
            flex: 1.8,
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        >
          <Image
            source={require("../Image/icon.jpg")}
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "center",
              borderRadius: 20
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        >
          <Image
            source={require("../Image/loading.gif")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "center",
              tintColor: "rgb(226,177,50)"
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "rgb(226,177,50)",
              fontFamily: "Yekan"
            }}
          >
            در حال بارگذاری ...
          </Text>
        </View>
      </View>
    );
  }
}
export { Splash };
