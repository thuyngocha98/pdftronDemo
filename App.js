/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { DocumentView, RNPdftron, Config } from "react-native-pdftron";

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const documentRef = React.useRef(null);

  React.useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
  }, []);

  const onLeadingNavButtonPressed = () => {
    console.log("leading nav button pressed");
    if (Platform.OS === "ios") {
      Alert.alert(
        "App",
        "onLeadingNavButtonPressed",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true }
      );
    } else {
      BackHandler.exitApp();
    }
  };

  const renderCustomHeader = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is custom header!</Text>
      </View>
    );
  };

  // const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf";
  const path = "http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"; // form fill
  return (
    <>
      {showHeader && renderCustomHeader()}
      <DocumentView
        document={path}
        ref={documentRef}
        showLeadingNavButton={true}
        leadingNavButtonIcon={
          Platform.OS === "ios"
            ? "ic_close_black_24px.png"
            : "ic_arrow_back_white_24dp"
        }
        onLeadingNavButtonPressed={onLeadingNavButtonPressed}
        onFormFieldValueChanged={({ fields }) => {
          setShowHeader(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  viewBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 16,
  },
});

export default App;
