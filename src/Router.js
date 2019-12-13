import React from "react";

import { Image } from "react-native";
import {
  createStackNavigator,
  createTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import { Currency } from "./Screen";
import { Support } from "./Screen";
import { Weather } from "./Screen";
import { Football } from "./Screen";
import { Landing } from "./Screen";
import { Header } from "./Component";
import { Login } from "./Screen";
import { Splash } from "./Screen";
import { Calculator } from "./Screen";
import { Album } from "./Screen";
import { Instagram } from "./Screen";

const AuthStack = createStackNavigator(
  { _Login: Login },
  { initialRouteName: "_Login", navigationOptions: { header: null } }
);

const RootStack = createStackNavigator(
  {
    _Tab: createTabNavigator(
      {
        "آب و هوا": {
          screen: Weather,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(226,177,50)" : "rgb(226,226,226)"
                  }}
                  source={require("./Image/01.png")}
                />
              );
            }
          }
        },
        فوتبال: {
          screen: Football,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(226,177,50)" : "rgb(226,226,226)"
                  }}
                  source={require("./Image/02.png")}
                />
              );
            }
          }
        },
        خانه: {
          screen: createStackNavigator(
            {
              _Landing: Landing,
              _Weather: Weather,
              _Football: Football,
              _Currency: Currency,
              _Support: Support,
              _Calculator: Calculator,
              _Album: Album,
              _Instagram: Instagram
            },
            {
              initialRouteName: "_Landing",
              navigationOptions: {
                header: null
              }
            }
          ),
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(226,177,50)" : "rgb(226,226,226)"
                  }}
                  source={require("./Image/28.png")}
                />
              );
            }
          }
        },
        صرافی: {
          screen: Currency,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(226,177,50)" : "rgb(226,226,226)"
                  }}
                  source={require("./Image/03.png")}
                />
              );
            }
          }
        },
        پشتیبانی: {
          screen: Support,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(226,177,50)" : "rgb(226,226,226)"
                  }}
                  source={require("./Image/04.png")}
                />
              );
            }
          }
        }
      },
      {
        tabBarPosition: "bottom",
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          style: {
            backgroundColor: "rgb(33,33,33)",
            height: 50,
            justifyContent: "center"
          },
          indicatorStyle: {
            backgroundColor: "blue",
            height: 0
          }
        },
        initialRouteName: "خانه",
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false
      }
    )
  },
  {
    initialRouteName: "_Tab",
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          title={navigation.state.routes[navigation.state.index].routeName}
          navigation={navigation}
        ></Header>
      )
    })
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    _AuthStack: AuthStack,
    _RootStack: createDrawerNavigator(
      {
        "صفحه اصلی": RootStack,
        "ماشین حساب": Calculator,
        آلبوم: Album,
        اینستاگرام: Instagram
      },
      {
        initialRouteName: "صفحه اصلی",
        drawerPosition: "right",
        drawerBackgroundColor: "rgb(33,33,33)",
        //drawerLockMode: "locked-closed",
        drawerWidth: 200,
        contentOptions: {
          activeTintColor: "rgb(42,42,42)",
          activeBackgroundColor: "rgb(226,177,50)",
          inactiveTintColor: "rgb(226,177,50)",
          inactiveBackgroundColor: "rgb(42,42,42)",
          labelStyle: {
            fontSize: 20,
            fontFamily: "Yekan"
          }
        }
      }
    ),
    _Splash: Splash
  },
  { initialRouteName: "_Splash" }
);

export default SwitchNavigator;
