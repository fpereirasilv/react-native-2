import React from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import AccelerationItem from "../components/AccelerationItem";
import Header from "../components/Header";
import styles from "../../styles";

const profile = {
  picture:
    "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  email: "rafaelfuzifaru@gmail.com",
  first_name: "Rafael",
  last_name: "Fuzifaru Cianci",
  phone: "(48) 99120-3585", // 99660-6666
  gender: 1,
  birthday: "1993-04-27T00:00:00-03:00",
  linkedin: "https://www.linkedin.com/in/rafaelcianci",
  github: "http://github.com/rafacianci",
  address: {
    Street: "",
    ZipCode: "",
    Number: "",
    ComplementaryAddress: ""
  },
  language: ["Português - PT", "Inglês - EN", "Japonês - JA"],
  name: "Rafael Fuzifaru Cianci"
};

export default class Profile extends React.PureComponent {
  state = { animating: true };

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      600
    );

  componentDidMount = () => this.closeActivityIndicator();

  render() {
    const animating = this.state.animating;
    return (
      <View>
        <View>
          <Header />
        </View>
        <View style={styles.Line}></View>
        <View style={styles.userContainer}>
          <Image
            source={{ uri: profile.picture }}
            style={styles.avatar}
            className={"profile-image"}
          />
          <Text style={styles.userName} className={"profile-name"}>
            {profile.name}
          </Text>
        </View>
        {animating === true ? (
          <ActivityIndicator
            animating={animating}
            color="#bc2b78"
            size="large"
            style={styles.activityIndicator}
          />
        ) : (
          <AccelerationItem item={profile} />
        )}
      </View>
    );
  }
}
