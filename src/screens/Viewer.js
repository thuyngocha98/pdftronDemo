import React from "react";
import { View, Text } from "react-native";
import { DocumentView, RNPdftron, Config } from "react-native-pdftron";

const Viewer = ({ route }) => {
  const url = route.params?.url;
  const documentRef = React.useRef(null);

  React.useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
  }, []);

  // const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf";
  // const path = "http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"; // form fill
  return (
      <DocumentView
        document={'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf'}
        collabEnabled={true}
        currentUser={'currentUser.id'}
      />
  );
};

export default Viewer;
