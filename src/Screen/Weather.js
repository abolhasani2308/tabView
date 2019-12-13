import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { WeatherCard } from "../Component/WeatherCard";
import { Loading } from "../Component/Loading";
import { WeatherPicker } from "../Component/WeatherPicker";
import Axios from "axios";

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: {},
      city: "tehran",
      country: "ir",
      isPickerLoading: true
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData(city = "tehran", country = "ir") {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metrics&appid=10ac66dc760b7718bee8d9ac26cc3143`;

    Axios.get(url)
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false,
          isPickerLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        alert(error);
      });
  }
  render() {
    if (this.state.isLoading) {
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
              flex: 4.5,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(33,33,33)"
            }}
          >
            <WeatherCard
              city={
                this.state.data.name == "Tehran"
                  ? "تهران"
                  : this.state.data.name == "Karaj"
                  ? "کرج"
                  : this.state.data.name == "Shiraz"
                  ? "شیراز"
                  : this.state.data.name == "Washington DC."
                  ? "واشنگتون"
                  : this.state.data.name == "Florida"
                  ? "فلوریدا"
                  : this.state.data.name == "Hawaii"
                  ? "هاوایی"
                  : this.state.data.name == "London"
                  ? "لندن"
                  : this.state.data.name == "Manchester"
                  ? "منچستر"
                  : this.state.data.name == "Liverpool"
                  ? "لیورپول"
                  : this.state.data.name
              }
              backImage={this.state.data.weather[0].icon}
              min={parseInt(this.state.data.main.temp_min - 273) || "-"}
              max={parseInt(this.state.data.main.temp_max - 273) || "-"}
              icon={this.state.data.weather[0].icon || "01d"}
              windSpeed={parseInt(this.state.data.wind.speed) || "-"}
              windDegree={parseInt(this.state.data.wind.deg) || "-"}
              humidity={parseInt(this.state.data.main.humidity) || "-"}
              visibility={
                parseInt(this.state.data.visibility / 10000) || "1" || "-"
              }
              weatherCondition={
                this.state.data.weather[0].icon == "01d"
                  ? "آسمان صاف"
                  : this.state.data.weather[0].icon == "01n"
                  ? "آسمان صاف"
                  : this.state.data.weather[0].icon == "02d"
                  ? "کمی ابری"
                  : this.state.data.weather[0].icon == "02n"
                  ? "کمی ابری"
                  : this.state.data.weather[0].icon == "03d"
                  ? "ابرهای پراکنده"
                  : this.state.data.weather[0].icon == "03n"
                  ? "ابرهای پراکنده"
                  : this.state.data.weather[0].icon == "04d"
                  ? "پوشیده از ابر"
                  : this.state.data.weather[0].icon == "04n"
                  ? "پوشیده از ابر"
                  : this.state.data.weather[0].icon == "09d"
                  ? "بارش شدید"
                  : this.state.data.weather[0].icon == "09n"
                  ? "بارش شدید"
                  : this.state.data.weather[0].icon == "10d"
                  ? "بارانی"
                  : this.state.data.weather[0].icon == "10n"
                  ? "بارانی"
                  : this.state.data.weather[0].icon == "11d"
                  ? "رعد و برق"
                  : this.state.data.weather[0].icon == "11n"
                  ? "رعد و برق"
                  : this.state.data.weather[0].icon == "13d"
                  ? "برفی"
                  : this.state.data.weather[0].icon == "13n"
                  ? "برفی"
                  : this.state.data.weather[0].icon == "50d"
                  ? "مه آلود"
                  : this.state.data.weather[0].icon == "50n"
                  ? "مه آلود"
                  : ""
              }
            />
          </View>
          {/*Picker part*/}
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(33,33,33)"
            }}
          >
            {/*margin*/}
            <View
              style={{
                height: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)"
              }}
            />
            {/*Circle & Location Image*/}
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(33,33,33)",
                borderRadius: 100,
                marginBottom: -25,
                zIndex: 1
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(33,33,33)",
                  borderRadius: 100,
                  //marginBottom: -20,
                  //zIndex: 1,
                  borderWidth: 2,
                  borderColor: "rgb(226,177,50)"
                }}
              >
                <Image
                  source={
                    this.state.isPickerLoading == true
                      ? require("../Image/loading.gif")
                      : require("../Image/18.png")
                  }
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "center",
                    tintColor: "rgb(226,177,50)"
                  }}
                />
              </View>
            </View>
            {/*Appearance of the Picker part*/}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(33,33,33)",
                marginHorizontal: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: "rgb(226,177,50)",
                borderTopWidth: 2,
                borderLeftWidth: 2,
                borderRightWidth: 2
              }}
            >
              <WeatherPicker
                refresh={(city, country) => {
                  this.setState({ city, country }, () => {
                    this.loadData(this.state.city, this.state.country);
                    this.setState({ isPickerLoading: true });
                  });
                }}
              ></WeatherPicker>
            </View>
          </View>
        </View>
      );
    }
  }
}

export { Weather };
