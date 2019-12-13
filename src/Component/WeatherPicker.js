import React, { Component } from "react";
import { View, Picker } from "react-native";

class WeatherPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "ir",
      city: "tehran",
      index: "0"
    };
  }

  render() {
    const cities = [
      [
        { label: "تهران", value: "tehran" },
        { label: "کرج", value: "karaj" },
        { label: "شیراز", value: "shiraz" }
      ],
      [
        { label: "واشنگتون", value: "washington" },
        { label: "فلوریدا", value: "florida" },
        { label: "هاوایی", value: "hawaii" }
      ],
      [
        { label: "لندن", value: "london" },
        { label: "منچستر", value: "manchester" },
        { label: "لیورپول", value: "liverpool" }
      ]
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          marginTop: 5,
          marginHorizontal: 5,
          flexDirection: "row"
        }}
      >
        {/*City*/}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(168,168,168)",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            marginRight: 2.5,
            borderTopLeftRadius: 20
          }}
        >
          <Picker
            style={{ flex: 1, alignSelf: "stretch" }}
            selectedValue={this.state.city}
            onValueChange={value => {
              this.setState({ city: value }, () => {
                this.props.refresh(this.state.city, this.state.country);
              });
            }}
          >
            {cities[this.state.index].map(item => {
              return (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                ></Picker.Item>
              );
            })}
          </Picker>
        </View>
        {/*Country*/}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(168,168,168)",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            marginLeft: 2.5,
            borderTopRightRadius: 20
          }}
        >
          <Picker
            style={{ flex: 1, alignSelf: "stretch" }}
            selectedValue={this.state.country}
            onValueChange={(value, index) => {
              this.setState({ country: value, index });
            }}
          >
            <Picker.Item label="ایران" value="ir"></Picker.Item>
            <Picker.Item label="آمریکا" value="us"></Picker.Item>
            <Picker.Item label="انگلیس" value="uk"></Picker.Item>
          </Picker>
        </View>
      </View>
    );
  }
}

export { WeatherPicker };
