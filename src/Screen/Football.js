import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { FootballCard } from "../Component/FootballCard";
import { Loading } from "../Component/Loading";
import Axios from "axios";

class Football extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      lastUpdate: "0",
      data: []
    };
  }

  LoadData() {
    const url = "http://api.football-data.org/v2/matches";

    Axios.get(url, {
      headers: { "X-Auth-Token": "f0ad145a3a4345b0b9bac0a1cb25a4b6" }
    })
      .then(response => {
        let today = new Date();
        let time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();

        this.setState({
          data: response.data.matches,
          isLoading: false,
          lastUpdate: time
        });
        //console.warn(JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        this.setState({ isLoading: false, lastUpdate: time });
        alert(error);
      });
  }

  componentDidMount() {
    this.LoadData();
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
              height: 40,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(226,177,50)"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(42,42,42)"
              }}
            >
              آخرین به روز رسانی {this.state.lastUpdate}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(33,33,33)"
            }}
          >
            <FlatList
              style={{ flex: 1, alignSelf: "stretch" }}
              data={this.state.data}
              renderItem={({ item, index }) => {
                let currentHour = new Date().getHours();
                let currentMinute = new Date().getMinutes();
                let gameTime = item.utcDate.split("T");
                let gameHour = gameTime[1].split(":");

                let remainingHours = gameHour[0] - currentHour;
                let remainingMinutes = gameHour[1] - currentMinute;

                {
                  /*The conversion of UTC time to Iran*/
                }
                let remainingHoursGermany = remainingHours + 3;
                let remainingMinutesGermany = remainingMinutes + 30;

                let remainingMinutesGermanyNew =
                  remainingMinutesGermany > 60 || remainingMinutesGermany == 60
                    ? remainingMinutesGermany - 60
                    : remainingMinutesGermany;

                let remainingHoursGermanyNew =
                  remainingMinutesGermanyNew == remainingMinutesGermany - 60
                    ? remainingHoursGermany + 1
                    : remainingHoursGermany;

                return (
                  <FootballCard
                    space={index == this.state.data.length - 1 ? 10 : 0}
                    home={item.homeTeam.name}
                    away={item.awayTeam.name}
                    homeGoals={
                      item.score.fullTime.homeTeam
                        ? item.score.fullTime.homeTeam
                        : "0"
                    }
                    awayGoals={
                      item.score.fullTime.awayTeam
                        ? item.score.fullTime.awayTeam
                        : "0"
                    }
                    league={item.competition.name}
                    children={
                      item.status == "FINISHED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          نتیجه نهایی
                        </Text>
                      ) : item.status == "SCHEDULED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          تا بازی {remainingHoursGermanyNew}:
                          {remainingMinutesGermanyNew}
                        </Text>
                      ) : item.status == "IN_PLAY" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          در حال بازی
                        </Text>
                      ) : item.status == "PAUSED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          بین دو نیمه
                        </Text>
                      ) : item.status == "POSTPONED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          به تعویق افتاد
                        </Text>
                      ) : item.status == "CANCELED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          لغو شد
                        </Text>
                      ) : item.status == "SUSPENDED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          معلق
                        </Text>
                      ) : item.status == "AWARDED" ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          اتمام سه هیچ
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "Yekan",
                            color: "rgb(168,168,168)"
                          }}
                        >
                          {item.status}
                        </Text>
                      )
                    }
                  ></FootballCard>
                );
              }}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
            ></FlatList>
            {/*Refresh Fab*/}
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "rgb(168,168,168)",
                borderRadius: 100,
                position: "absolute",
                bottom: 5,
                right: 10
              }}
              onPress={() => {
                return this.setState({ isLoading: true }), this.LoadData();
              }}
            >
              <Image
                style={{
                  width: 45,
                  height: 45,
                  tintColor: "rgb(42,42,42)"
                }}
                source={require("../Image/21.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export { Football };
