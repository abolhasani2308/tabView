import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity, Image } from "react-native";
import { CurrencyCard } from "../Component/CurrencyCard";
import { CurrencyCardItem } from "../Component/CurrencyCard";
import { Loading } from "../Component/Loading";
import Axios from "axios";

class Currency extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: []
    };
  }

  LoadData() {
    const url = "https://currency.jafari.pw/json";

    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false });
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
      const headers = Object.keys(this.state.data);
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
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgb(33,33,33)"
            }}
          >
            <SectionList
              style={{
                flex: 1,
                alignSelf: "stretch"
              }}
              renderSectionHeader={({ section: { title } }) => {
                return (
                  <View
                    style={{
                      height: 40,
                      alignSelf: "stretch",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgb(226,177,50)",
                      borderBottomWidth: 1,
                      borderColor: "rgb(33,33,33)"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontFamily: "Yekan",
                        color: "rgb(42,42,42)"
                      }}
                    >
                      {title == "Currency"
                        ? "ارز"
                        : title == "Gold"
                        ? "سکه"
                        : title == "Item"
                        ? "طلا"
                        : title}
                    </Text>
                  </View>
                );
              }}
              sections={[
                {
                  title: "واحدها به تومان است",
                  data: this.state.data[headers[0]],
                  renderItem: ({ item }) => {
                    return <View></View>;
                  }
                },
                {
                  title: headers[1],
                  data: this.state.data[headers[1]],
                  renderItem: ({ item, index }) => {
                    return (
                      <CurrencyCard
                        name={
                          item.Currency == "US Dollar"
                            ? "دلار آمریکا"
                            : item.Currency == "Euro"
                            ? "یورو"
                            : item.Currency == "Canadian Dollar"
                            ? "دلار کانادا"
                            : item.Currency == "British Pound"
                            ? "پوند انگلیس"
                            : item.Currency == "Swiss Franc"
                            ? "فرانک سوئیس"
                            : item.Currency == "Swedish Krona"
                            ? "کرون سوئد"
                            : item.Currency == "Norwegian Krone"
                            ? "کرون نروژ"
                            : item.Currency == "Danish Krone"
                            ? "کرون دانمارک"
                            : item.Currency == "Indian Rupee"
                            ? "روپیه هند"
                            : item.Currency == "Turkish Lira"
                            ? "لیر ترکیه"
                            : item.Currency == "UAE Dirham"
                            ? "درهم عمارات"
                            : item.Currency == "Kuwaiti Dinar"
                            ? "دینار کویت"
                            : item.Currency == "¹⁰⁰ Japanese Yen"
                            ? "صد ین ژاپن"
                            : item.Currency == "Qatari Riyal"
                            ? "ریال قطر"
                            : item.Currency == "Iraqi Dinar"
                            ? "دینار عراق"
                            : item.Currency == "Australian Dollar"
                            ? "دلار استرالیا"
                            : item.Currency == "KSA Riyal"
                            ? "ریال عربستان"
                            : item.Currency == "Russian Ruble"
                            ? "روبل روسیه"
                            : item.Currency == "Armenian Dram"
                            ? "درام ارمنستان"
                            : item.Currency == "Chinese Yuan"
                            ? "یوان چین"
                            : item.Currency == "Thai Baht"
                            ? "بات تایلند"
                            : item.Currency == "Ringgit"
                            ? "رینگیت مالزی"
                            : item.Currency == "Afghan Afghani"
                            ? "افغانی افغانستان"
                            : item.Currency == "Azerbaijani Manat"
                            ? "مانات آذربایجان"
                            : item.Currency
                        }
                        buy={item.Buy}
                        sell={item.Sell}
                        space={
                          index == this.state.data[headers[1]].length - 1
                            ? 10
                            : 0
                        }
                      ></CurrencyCard>
                    );
                  }
                },
                {
                  title: headers[2],
                  data: this.state.data[headers[2]],
                  renderItem: ({ item, index }) => {
                    return (
                      <CurrencyCard
                        name={
                          item.Coin == "1 Old Azadi"
                            ? "طرح قدیم"
                            : item.Coin == "1 Emami"
                            ? "امامی"
                            : item.Coin == "1/2 Azadi"
                            ? "نیم"
                            : item.Coin == "1/4 Azadi"
                            ? "ربع"
                            : item.Coin
                        }
                        buy={item.Buy}
                        sell={item.Sell}
                        space={
                          index == this.state.data[headers[2]].length - 1
                            ? 10
                            : 0
                        }
                      ></CurrencyCard>
                    );
                  }
                },
                {
                  title: headers[3],
                  data: this.state.data[headers[3]],
                  renderItem: ({ item, index }) => {
                    return (
                      <CurrencyCardItem
                        name={
                          item.Name == "Ounce"
                            ? "اونس"
                            : item.Name == "Mithqal"
                            ? "مثقال"
                            : item.Name == "Gold 18"
                            ? "18 عیار"
                            : item.Name == "Gold 24"
                            ? "24 عیار"
                            : item.Name
                        }
                        rate={item.Rate}
                        space={
                          index == this.state.data[headers[3]].length - 1
                            ? 10
                            : 0
                        }
                      ></CurrencyCardItem>
                    );
                  }
                }
              ]}
              keyExtractor={(item, index) => item + index}
              showsVerticalScrollIndicator={null}
              stickySectionHeadersEnabled
            ></SectionList>
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

export { Currency };
