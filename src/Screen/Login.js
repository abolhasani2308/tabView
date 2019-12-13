import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  AsyncStorage,
  StatusBar
} from "react-native";
import axios from "axios";
import Modal from "react-native-modalbox";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isSecure: true,
      userName: "",
      passWord: "",
      isLoading: false,
      isAccept: false,
      isModalVisible: false
    };
  }

  renderModal() {
    return (
      <Modal
        style={{
          width: 300,
          height: 360,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: 10
        }}
        position={"center"}
        isOpen={this.state.isModalVisible}
        onClosed={() => {
          this.setState({ isModalVisible: false });
        }}
        //coverScreen
        backdropPressToClose
        backButtonClose
        useNativeDriver
        animationDuration={350}
        swipeToClose={false}
        //backdropColor={"rgb(33,33,33)"}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "rgb(168,168,168)",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgb(226,177,50)"
          }}
        >
          {/*Text*/}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              margin: 10
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(42,42,42)",
                lineHeight: 30,
                textAlign: "center"
              }}
            >
              برنامه پیش رو توسط امیر محمد ابوالحسنی توسعه داده شده و کلیه حقوق
              آن برای شخص توسعه دهنده محفوظ است. در این برنامه از اطلاعات وب
              سایت های زیر استفاده شده و توسعه دهنده هیچگونه مسئولیتی نسبت به
              این اطلاعات ندارد.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(42,42,42)",
                lineHeight: 30,
                textAlign: "center"
              }}
            >
              www.openweathermap.org www.football-data.org www.sarafijafari.com
            </Text>
          </View>
          {/*retaining View*/}
          <View
            style={{
              height: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(226,177,50)"
            }}
          ></View>
          {/*TouchableOpacity*/}
          <View
            style={{
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              flexDirection: "row"
            }}
          >
            {/*Close*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "rgb(42,42,42)",
                  margin: 5
                }}
                onPress={() => {
                  this.setState({ isModalVisible: false });
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Yekan",
                    color: "rgb(168,168,168)"
                  }}
                >
                  بستن
                </Text>
              </TouchableOpacity>
            </View>
            {/*I agree*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "rgb(42,42,42)",
                  margin: 5
                }}
                onPress={() => {
                  this.setState({ isAccept: true, isModalVisible: false });
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Yekan",
                    color: "rgb(168,168,168)"
                  }}
                >
                  موافقم
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const url = "http://mohamadkh75.heisenbug.ir";
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch"
        }}
      >
        <StatusBar hidden></StatusBar>
        {this.renderModal()}
        {/*User Image*/}
        <View
          style={{
            flex: 5,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(33,33,33)",
            paddingTop: 60
          }}
        >
          <Image
            source={require("../Image/22.png")}
            style={{
              width: 180,
              height: 180,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "center"
            }}
          />
        </View>
        {/*Bottom part*/}
        <View
          style={{
            flex: 11,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "rgb(33,33,33)"
          }}
        >
          {/*UserName box*/}
          <TextInput
            style={{
              height: 50,
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(42,42,42)",
              textAlign: "right",
              alignSelf: "stretch",
              borderRadius: 10,
              marginHorizontal: 40,
              paddingRight: 10,
              backgroundColor: "rgb(168,168,168)",
              marginBottom: 10,
              textAlignVertical: "center"
            }}
            value={this.state.userName}
            onChangeText={newUserName => {
              this.setState({ userName: newUserName });
            }}
            placeholder="نام کاربری"
            placeholderTextColor="rgb(42,42,42)"
            onSubmitEditing={() => this.passInput.focus()}
            returnKeyType="next"
            returnKeyLabel="رمز عبور"
          />
          {/*Password box*/}
          <View
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: 10,
              marginHorizontal: 40,
              backgroundColor: "rgb(168,168,168)",
              flexDirection: "row-reverse"
            }}
          >
            <TextInput
              ref={passInput => {
                this.passInput = passInput;
              }}
              style={{
                flex: 7,
                fontSize: 20,
                fontFamily: "Yekan",
                textAlign: "right",
                color: "rgb(42,42,42)",
                alignSelf: "stretch",
                paddingRight: 10,
                textAlignVertical: "center"
              }}
              value={this.state.passWord}
              onChangeText={newPassWord => {
                this.setState({ passWord: newPassWord });
              }}
              placeholder="رمز عبور"
              placeholderTextColor="rgb(42,42,42)"
              secureTextEntry={this.state.isSecure}
              returnKeyLabel="بستن"
            />
            {/*Secure Image*/}
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
                alignSelf: "stretch",
                marginLeft: 10
              }}
              onPress={() => {
                this.setState({ isSecure: !this.state.isSecure });
              }}
            >
              <Image
                source={
                  this.state.isSecure
                    ? require("../Image/24.png")
                    : require("../Image/25.png")
                }
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  resizeMode: "center",
                  tintColor: "rgb(42,42,42)"
                }}
              />
            </TouchableOpacity>
          </View>
          {/*rules Part*/}
          <View
            style={{
              height: 50,
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "stretch",
              marginHorizontal: 50,
              flexDirection: "row-reverse"
            }}
          >
            {/*check box*/}
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(168,168,168)"
              }}
              activeOpacity={1}
              onPress={() => {
                this.setState({ isAccept: !this.state.isAccept });
              }}
            >
              <Image
                source={
                  this.state.isAccept
                    ? require("../Image/26.png")
                    : require("../Image/27.png")
                }
                style={{
                  width: 23,
                  height: 23,
                  justifyContent: "center",
                  alignItems: "center",
                  //resizeMode: "center",
                  tintColor: "rgb(42,42,42)"
                }}
              />
            </TouchableOpacity>
            {/*I accept the rules*/}
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Yekan",
                color: "rgb(168,168,168)",
                marginRight: 3
              }}
            >
              قوانین را می پذیرم|
            </Text>
            {/*TouchableOpacity Modal*/}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => {
                this.setState({ isModalVisible: true });
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Yekan",
                  color: "rgb(168,168,168)"
                }}
              >
                مطالعه قوانین
              </Text>
            </TouchableOpacity>
          </View>
          {/*Login TouchableOpacity*/}
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor:
                this.state.userName == "" ||
                this.state.passWord == "" ||
                this.state.isAccept == false
                  ? "rgb(168,168,168)"
                  : "rgb(226,177,50)",
              borderRadius: 10,
              marginHorizontal: 40,
              marginBottom: 10
            }}
            disabled={
              this.state.userName == "" ||
              this.state.passWord == "" ||
              this.state.isAccept == false
            }
            onPress={() => {
              Keyboard.dismiss();
              this.setState({ isLoading: true });

              axios
                .post(url, {
                  username: this.state.userName,
                  password: this.state.passWord
                })
                .then(response => {
                  AsyncStorage.setItem("token", "123")
                    .then(() => {
                      this.props.navigation.navigate("_RootStack");
                      //alert(response.data.message);
                    })
                    .catch(error => alert(error));
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
              <Image
                style={{ width: 45, height: 45, tintColor: "rgb(42,42,42)" }}
                source={require("../Image/loading.gif")}
              ></Image>
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Yekan",
                  color: "rgb(42,42,42)"
                }}
              >
                ورود
              </Text>
            )}
          </TouchableOpacity>
          <View
            style={{
              height: 90,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch"
            }}
          >
            <Image
              source={require("../Image/23.png")}
              style={{
                height: 120,
                resizeMode: "center",
                tintColor: "rgb(226,177,50)",
                marginBottom: -80
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export { Login };
