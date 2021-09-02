import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import passwordIconOpen from '../../Assets/Images/eyeopen.png';
import passwordIconClose from '../../Assets/Images/eyeclose.png';

const Form = ({style, data}) => {
  const [showPassword, setShowPassword] = useState(true);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
    console.log('passwordVisibility');
  };

  return (
    <View>
      {showPassword && data.icon ? (
        <View style={styles.passContainer}>
          <TextInput
            style={[style, styles.input]}
            placeholder={data.placeholder}
            placeholderTextColor="black"
            name={data.name}
            autoCorrect={false}
            value={data.value}
            onChangeText={data.onChangeText}
            secureTextEntry={data.secureTextEntry}
          />
          <TouchableOpacity style={styles.btn} onPress={passwordVisibility}>
            <Image style={styles.icon} source={passwordIconOpen} />
          </TouchableOpacity>
        </View>
      ) : !showPassword && data.icon ? (
        <View style={styles.passContainer}>
          <TextInput
            style={[style, styles.input]}
            placeholder={data.placeholder}
            placeholderTextColor="black"
            name={data.name}
            autoCorrect={false}
            value={data.value}
            onChangeText={data.onChangeText}
          />
          <TouchableOpacity style={styles.btn} onPress={passwordVisibility}>
            <Image style={styles.icon} size={30} source={passwordIconClose} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TextInput
            style={[style, styles.Input]}
            placeholder={data.placeholder}
            placeholderTextColor="black"
            name={data.name}
            autoCorrect={false}
            value={data.value}
            onChangeText={data.onChangeText}
            secureTextEntry={data.secureTextEntry}
            editable={data.edit}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  passContainer: {
    width: '100%',
    flexDirection: 'row',
    flexBasis: 'auto',
    borderBottomWidth: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  input: {
    paddingBottom: -10,
    width: '70%',
  },
  Input: {
    paddingBottom: -10,
    width: '81%',
  },
  icon: {
    marginTop: 16,
    opacity: 0.6,
    marginLeft: 20,
  },
});

export default Form;
