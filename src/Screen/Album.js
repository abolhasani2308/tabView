import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { AlbumCard } from "../Component";
import { Loading } from "../Component";
import Axios from "axios";

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [], isLoading: true };
  }

  componentDidMount() {
    const api = "http://rallycoding.herokuapp.com/api/music_albums";

    Axios.get(api)
      .then(r => {
        this.setState({ data: r.data, isLoading: false });
      })
      .catch(error => {
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
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(33,33,33)"
          }}
        >
          <FlatList
            style={{ flex: 1, alignSelf: "stretch" }}
            data={this.state.data}
            renderItem={({ item, index }) => {
              return (
                <AlbumCard
                  image={item.image}
                  singer={item.artist}
                  album={item.title}
                  url={item.url}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item}
          />
        </View>
      );
    }
  }
}
export { Album };
