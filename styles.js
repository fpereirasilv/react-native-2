import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5
    // borderBottomWidth: 3,
    // borderBottomColor: "#966FFE"
  },
  containerMaster: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50
  },
  ImageHeader: {
    resizeMode: "center",
    width: "100%",
    height: 130,
    marginLeft: 10,
    marginTop: 5
  },
  Line: {
    borderColor: "#7800FF",
    borderWidth: 1,
    paddingTop: 0,
    marginTop: 120
  },
  avatar: {
    resizeMode: "stretch",
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 15
  },
  userName: {
    textAlign: "justify",
    color: "#7800FF",
    fontSize: 18,
    paddingLeft: 5
  },
  userContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40
  },
  containerSocialMedia: {
    flexDirection: "column",
    backgroundColor: "#000",
    opacity: 1,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 20,
    width: "95%",
    height: 100,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textMediaSocial: {
    textAlign: "justify",
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 5
  },
  containerDados: {
    backgroundColor: "#000",
    margin: 10,
    width: "95%",
    height: 240,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 5
  },
  textIdiomas: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#CDC1C5",
    color: "#FFF",
    fontSize: 12,
    paddingLeft: 10,
    borderRadius: 15,
    width: 100,
    height: 30,
    marginLeft: 5
  },
  containerTextIdiomas: {
    flexDirection: "row"
  },
  activityIndicator: {
    alignItems: "center",
    marginTop: 10
  }
});

export default styles;
