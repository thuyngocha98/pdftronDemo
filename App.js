/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  Alert
} from 'react-native';

import { DocumentView, RNPdftron } from 'react-native-pdftron';

const App = () => {
  const documentRef = React.useRef(null);
  React.useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
  }, []);
  const onLeadingNavButtonPressed = () => {
    console.log('leading nav button pressed');
    if (Platform.OS === 'ios') {
      Alert.alert(
        'App',
        'onLeadingNavButtonPressed',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: true }
      )
    } else {
      BackHandler.exitApp();
    }
  }
  const handleUndo = () => {
    documentRef.current?.undo();
    documentRef.current?.canUndo().then((canUndo) => {
      console.log(canUndo ? 'undo possible' : 'no action to undo');
    });
  }
  const handleRedo = () => {
    documentRef.current?.redo();
    documentRef.current?.canRedo().then((canRedo) => {
      console.log(canRedo ? 'redo possible' : 'no action to redo');
    });
  }
  const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf";
  return (
    <>
    <DocumentView
      ref={documentRef}
      onUndoRedoStateChanged = {(e) => { 
        console.log("Undo/redo stack state changed"+ e);
      }}
      document={path}
      showLeadingNavButton={true}
      leadingNavButtonIcon={Platform.OS === 'ios' ? 'ic_close_black_24px.png' : 'ic_arrow_back_white_24dp'}
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
    />
    <Text onPress={handleUndo} style={{margin: 20}}>undo</Text>
    <Text onPress={handleRedo} style={{margin: 20}}>redo</Text>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
