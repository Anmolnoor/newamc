import React from 'react';
import * as ImagePickerrrr from 'react-native-image-picker';
// {launchCamera, launchImageLibrary}
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Image,
} from 'react-native';

const ImagePiker = ({setFormData, FormData}) => {
  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 1024,
      maxHeight: 720,
      // noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
      includeBase64: true,
    };

    ImagePickerrrr.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        setFormData({...FormData, avatar: response});
        console.log(response);
      }
    });
  }
  return (
    <View>
      <TouchableOpacity style={styles.touchablebtn} onPress={selectImage}>
        <Text style={styles.lowerBtn}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePiker;

const styles = StyleSheet.create({
  touchablebtn: {
    padding: 8,
  },
  lowerBtn: {
    marginTop: 2,
    borderBottomWidth: 1,
    padding: 10,
    width: 320,
    paddingLeft: 5,
    color: '#000',
  },
});
