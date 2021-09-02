import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import InputReg from '../components/Form/Form';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from '../components/DatePicker/DatePicker';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import Logo from '../Assets/Images/logo.png';
import {RegisterValidator} from '../components/Validations/validations';

const Register = ({navigation}) => {
  const [validations, setValid] = useState(false);
  const [loader, setLoader] = useState(false);
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    role_id: 2,
    gender: '',
    phone_number: '',
    address: '',
    avatar: {},
    dob: '',
    user_status: 0,
  });

  const createTwoButtonAlert = response =>
    Alert.alert('Warning', response.msg, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onPressHandler = () => {
    setLoader(true);
    console.log({FormData});
    RegisterValidator.isValid(FormData).then(valid => setValid(valid));
    RegisterValidator.validate(FormData).catch(err => {
      createTwoButtonAlert({msg: err.message});
      setLoader(false);
      // resetForm();
    });
    axios
      .post(
        'http://amc-management.protocolsolution.com/api/user/signup',
        FormData,
      )
      .then(response => {
        console.log(response);
        setLoader(true);
        response.status === 201 && navigation.navigate('SignIn');
      })
      .catch(error => {
        console.log({error});
        if (error) {
          setLoader(true);
          createTwoButtonAlert({msg: error});
        }
        if (error === 'Request failed with status code 500') {
          console.log("Found it Let's go ");
        }
      });
  };

  const inputs = [
    {
      placeholder: 'Full name',
      name: 'name',
      value: FormData.name,
      onChangeText: e => setFormData({...FormData, name: e}),
    },
    {
      placeholder: 'Your email ID',
      name: 'email',
      value: FormData.email,
      onChangeText: e => setFormData({...FormData, email: e}),
    },
    {
      placeholder: 'Password',
      name: 'password',
      value: FormData.password,
      secureTextEntry: true,
      onChangeText: e => setFormData({...FormData, password: e}),
      icon: 'true',
    },
    {
      placeholder: 'Re-enter Password',
      name: 're-password',
      value: FormData.repassword,
      secureTextEntry: true,
      onChangeText: e => setFormData({...FormData, repassword: e}),
      icon: 'true',
    },
    {
      placeholder: 'Phone-Number',
      name: 'phone_number',
      value: FormData.phone_number,
      onChangeText: e => setFormData({...FormData, phone_number: e}),
    },
    {
      placeholder: 'Address',
      name: 'address',
      value: FormData.address,
      onChangeText: e => setFormData({...FormData, address: e}),
    },
  ];

  const onPressLog = () => {
    navigation.navigate('SignIn');
  };

  const radioData = [
    {
      label: 'Female',
      name: 'female',
    },
    {
      label: 'Male',
      name: 'male',
    },
  ];

  return loader ? (
    <Loader />
  ) : (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.inputBox}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.signup}> Register</Text>
          {inputs.map((item, index) => (
            <InputReg key={index} style={styles.inputReg} data={item} />
          ))}
          <DatePicker setFormData={setFormData} FormData={FormData} />
          <ImagePicker setFormData={setFormData} FormData={FormData} />
          <View style={styles.gender}>
            <Text style={styles.genderText}>Gender </Text>
            <RadioButtonRN
              style={styles.radioBtn}
              data={radioData}
              box={false}
              selectedBtn={e => {
                setFormData({...FormData, gender: e.name});
              }}
            />
          </View>
          <View style={styles.btnView}></View>
          <TouchableOpacity
            style={styles.touchablebtn}
            onPress={onPressHandler}>
            <Text style={styles.RegBtn}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logBtn} onPress={onPressLog}>
            <Text style={styles.signIn}>Have Account? SignIn</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  signup: {
    fontSize: 30,
    color: '#777777',
    fontWeight: '700',
    marginBottom: 15,
  },
  inputBox: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputReg: {
    color: 'black',
    paddingVertical: 8,
    marginVertical: 7,
    width: 290,
    borderBottomColor: '#777777',
  },
  gender: {
    flex: 1,
    flexDirection: 'row',
  },
  genderText: {
    fontSize: 20,
    marginTop: 7,
    marginRight: 20,
    marginLeft: 20,
  },
  radioBtn: {
    flexDirection: 'row',
    // flex: 1,
  },
  btnView: {
    flexDirection: 'row',
  },
  RegBtn: {
    borderWidth: 1,
    marginTop: 10,
    width: 290,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#c60e16',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 11,
    textAlign: 'center',
    fontSize: 16,
  },
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
  signIn: {
    margin: 20,
  },
});

export default Register;
