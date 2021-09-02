// ----------------------------------------------------------------
// This is the logoin page for the ps-amc
// ----------------------------------------------------------------

import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  // InteractionManager,
} from 'react-native';
import InputLog from '../components/Form/Form';
import loginLogo from '../Assets/Images/logo.png';
import Loader from '../components/Loader/Loader';
import {LoginValidator} from '../components/Validations/validations';

const SignIn = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [validated, setValid] = useState(false);

  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });
  const inputs = [
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
  ];

  const onPressReg = () => {
    navigation.navigate('SignUp');
  };

  const createTwoButtonAlert = response =>
    Alert.alert(
      'Warning',
      response.msg,
      [
        {
          text: 'OKAY',
          onPress: () => {
            console.log('Alert Closed by user');
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          // setLoader(!loader);
          console.log('Alert Closed');
        },
      },
    );

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  const onSubmitHandler = () => {
    setLoader(!loader);
    console.log(FormData);

    // const result = authSchema.Validate(FormData);
    // console.log('====================================');
    // console.log(result);
    // console.log('====================================');
    LoginValidator.isValid(FormData).then(valid => {
      setValid(true);
    });
    LoginValidator.validate(FormData).catch(function (err) {
      createTwoButtonAlert({msg: err.message});
      setLoader(false);
      // resetForm();
      // console.log('====================================');
      // console.log(err.name);
      // console.log(err.errors);
      // console.log('====================================');
      // err.errors; // => ['Deve ser maior que 18']
    });
    axios
      .post('http://amc-management.protocolsolution.com/api/login', FormData)
      .then(res => {
        const response = res.data;
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        if (response.status === '200') {
          setLoader(!loader);
          navigation.navigate('Home', response);
        }
        if (response.status === '400') {
          createTwoButtonAlert(response);
          setLoader(false);
          resetForm();
        }
      })
      .catch(err => {
        setLoader(false);
        resetForm();
        console.log({err: err, msg: err.message});
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        {loader && <Loader />}
        {!loader && (
          <View style={styles.container}>
            <Image style={styles.logo} source={loginLogo} />
            <Text style={styles.signin}>Log-in</Text>
            {inputs.map((item, index) => (
              <InputLog key={index} style={styles.inputLog} data={item} />
            ))}

            <Text style={styles.forgetPassword}>Forget Password ?</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={onSubmitHandler}>
              <Text style={styles.LoginBtn}>Log-in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regBtn} onPress={onPressReg}>
              <Text style={styles.SignUp}>Don't have Account? SingUp</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  signin: {
    marginBottom: 17,
    fontSize: 30,
    color: '#777777',
    fontWeight: '700',
  },
  inputLog: {
    paddingVertical: 8,
    marginVertical: 7,
    width: 290,
    color: '#000',
    borderBottomColor: '#777777',
  },

  forgetPassword: {
    marginBottom: 16,
    marginTop: 10,
    marginLeft: '41%',
    color: '#292734',
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginBtn: {
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
  SignUp: {
    margin: 10,
    color: '#292734',
  },
});

export default SignIn;
