import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

export default class PostCard extends Component {

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/Post.jpg")}
              style={styles.postImage}>
            </Image>
            <View style={styles.titleContainer}>
              <Text style={styles.postTitleText}>
                {this.props.post.title}
              </Text>
              <Text style={styles.postAuthorText}>
                {this.props.post.author}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.post.description}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10
  },
  postImage: {
    resizeMode: "contain",
    width: "90%",
    alignSelf: "center",
    height: 200
  },
  titleContainer: {
    justifyContent: "center",
    top:-15,
    padding: 10
  },
  postTitleText: {
    fontSize: 25,
  },
  postAuthorText: {
    fontSize: 17,
  },
  descriptionText: {
    fontSize: 13
  }
});
