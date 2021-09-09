/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { Platform, Text } from "react-native";

import { DocumentView, RNPdftron, Config } from "react-native-pdftron";

const App = () => {
  const documentRef = React.useRef(null);

  React.useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
  }, []);

  const flagFields = () => {
    documentRef.current?.setFlagForFields(
      [ // fieldNames are taken from document
        "Given Name Text Box",
        "Family Name Text Box",
        "Address 1 Text Box",
        "House nr Text Box",
        "Address 2 Text Box",
      ],
      Config.FieldFlags.ReadOnly,
      true
    );
  };

  // const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf";
  const path = "http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"; // form fill
  return (
    <>
      <DocumentView
        document={path}
        ref={documentRef}
        showLeadingNavButton={true}
        leadingNavButtonIcon={
          Platform.OS === "ios"
            ? "ic_close_black_24px.png"
            : "ic_arrow_back_white_24dp"
        }
        hideToolbarsOnTap={false}
        longPressMenuEnabled={true}
      />
      <Text
        onPress={flagFields}
        style={{ marginBottom: 50, textAlign: "center" }}
      >
        Set flag for fields
      </Text>
    </>
  );
};

export default App;
