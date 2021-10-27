import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const path1 =
  "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf";
const path2 = "http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"; // form fill

const Home = ({ navigation }) => {
  const navigationToViewer = (url) => {
    navigation.navigate("Viewer", { url: url });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          width: 200,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          marginBottom: 20,
        }}
        onPress={() => navigationToViewer(path2)}
      >
        <Text style={{ color: "white", fontSize: 18 }}>document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
