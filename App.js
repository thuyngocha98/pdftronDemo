/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Platform,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

import { DocumentView, RNPdftron, Config } from 'react-native-pdftron';

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

  const getFieldNames = () => {
    // All filedName start with "untitled" (I created it);
    const fieldNames = [...Array(35).keys()].reduce((result, item) => {
      if (item !== 0 &&item !== 2 && item !== 3) { // fieldName do not exists
        result.push("untitled" + item);
      }
      return result;
    }, []);
    return fieldNames;
  }

  const handleSetFlagForField = () => {
    const fieldNames = getFieldNames();
    if(documentRef.current){
      documentRef.current.setFlagForFields(fieldNames, Config.FieldFlags.ReadOnly, true);
    }
  }

  const path = "https://drive.google.com/u/0/uc?id=1idX-xlWJw07CZGHknbx7w-fRZXd32Mhd";
  return (
    <>
      <DocumentView
        document={path}
        ref={documentRef}
        showLeadingNavButton={true}
        leadingNavButtonIcon={Platform.OS === 'ios' ? 'ic_close_black_24px.png' : 'ic_arrow_back_white_24dp'}
        onLeadingNavButtonPressed={onLeadingNavButtonPressed}
      />
      <TouchableOpacity onPress={handleSetFlagForField} style={styles.viewBtn}>
        <Text style={styles.txt}>Set flag for fields</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  viewBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 16,
  }
});

export default App;
