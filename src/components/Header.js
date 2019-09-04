import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "../../styles";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <Image
          source={{
            uri:
              "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"
          }}
          style={styles.ImageHeader}
          className={"header-image"}
        />
      </View>
    );
  }
}
