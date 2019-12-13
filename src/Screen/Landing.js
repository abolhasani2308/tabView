import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import Modal from "react-native-modalbox";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    isModalVisible: false;
    isModalExitVisible: false;
  }

  //--------------------rules Modal--------------------
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
          </View>
        </View>
      </Modal>
    );
  }

  //--------------------Exit Modal--------------------
  renderExitModal() {
    return (
      <Modal
        style={{
          width: 300,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: 10
        }}
        position={"center"}
        isOpen={this.state.isModalExitVisible}
        onClosed={() => {
          this.setState({ isModalExitVisible: false });
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
              آیا می خواهید از حساب کاربری خود خارج شوید؟
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
                  this.setState({ isModalExitVisible: false });
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Yekan",
                    color: "rgb(168,168,168)"
                  }}
                >
                  خیر
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
                  this.setState({ isModalExitVisible: false });
                  AsyncStorage.clear()
                    .then(
                      //alert("شما از حساب کاربری خود خارج شدید."),
                      this.props.navigation.navigate("_AuthStack")
                    )
                    .catch(error => alert(error));
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Yekan",
                    color: "rgb(168,168,168)"
                  }}
                >
                  بله
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  //--------------------render()--------------------
  render() {
    const pages = [
      {
        name: "آب و هوا",
        icon: require("../Image/Home/01.png"),
        page: "_Weather"
      },
      {
        name: "فوتبال",
        icon: require("../Image/Home/02.png"),
        page: "_Football"
      },
      {
        name: "صرافی",
        icon: require("../Image/Home/03.png"),
        page: "_Currency"
      },
      {
        name: "ماشین حساب",
        icon: require("../Image/Home/04.png"),
        page: "_Calculator"
      },
      {
        name: "آلبوم",
        icon: require("../Image/Home/05.png"),
        page: "_Album"
      },
      {
        name: "اینستاگرام",
        icon: require("../Image/Home/06.png"),
        page: "_Instagram"
      },
      {
        name: "پشتیبانی",
        icon: require("../Image/Home/07.png"),
        page: "_Support"
      },
      {
        name: "قوانین",
        icon: require("../Image/Home/08.png"),
        page: "_rules"
      },
      {
        name: "خروج",
        icon: require("../Image/Home/09.png"),
        page: "_AuthStack"
      }
    ];
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(33,33,33)"
        }}
      >
        {/*--------------------render Modal--------------------*/}
        {this.renderModal()}
        {this.renderExitModal()}
        {/*--------------------Retaining View--------------------*/}
        <View
          style={{
            height: 10,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(226,177,50)"
          }}
        ></View>
        <FlatList
          style={{ flex: 1, alignSelf: "stretch", marginHorizontal: 5 }}
          data={pages}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: 106.5,
                  height: 131,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(42,42,42)",
                  //marginBottom: 10,
                  marginTop: 10,
                  marginHorizontal: 5
                }}
                onPress={() => {
                  {
                    /*--------------------Distinguish _AuthStack & _rules--------------------*/
                  }
                  item.page == "_AuthStack"
                    ? () => {}
                    : item.page == "_rules"
                    ? () => {}
                    : /*--------------------Navigation--------------------*/
                      this.props.navigation.navigate(item.page);
                  /*--------------------SetState Modal Visibility--------------------*/
                  {
                    item.page == "_AuthStack"
                      ? this.setState({ isModalExitVisible: true })
                      : () => {};
                  }
                  {
                    item.page == "_rules"
                      ? this.setState({ isModalVisible: true })
                      : () => {};
                  }
                }}
              >
                {/*--------------------Card--------------------*/}
                <View
                  style={{
                    width: 110,
                    height: 90,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      tintColor: "rgb(168,168,168)"
                    }}
                    source={item.icon}
                  ></Image>
                </View>
                <View
                  style={{
                    width: 110,
                    height: 5,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(33,33,33)"
                  }}
                ></View>
                <View
                  style={{
                    width: 110,
                    height: 36,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Yekan",
                      color: "rgb(168,168,168)"
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={3}
          keyExtractor={item => String(item)}
          showsVerticalScrollIndicator={false}
        ></FlatList>
        {/*--------------------Retaining View--------------------*/}
        <View
          style={{
            height: 10,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(226,177,50)"
          }}
        ></View>
      </View>
    );
  }
}
export { Landing };
