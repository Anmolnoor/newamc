import React, {useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CheckBoxS = ({styles, setFormData, FormData}) => {
  const [clicked, setClick] = useState({
    felmale: false,
    male: false,
  });
  return (
    <View>
      <BouncyCheckbox
        style={styles.checkBox}
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Female"
        iconStyle={{borderColor: 'blue'}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={e => {
          if (!clicked.felmale) {
            setClick({...clicked, felmale: true, male: false});
          }

          if (e) {
            setFormData({
              ...FormData,
              gender: 'female',
            });
          }
        }}
      />
      <BouncyCheckbox
        style={styles.checkBox}
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Male"
        iconStyle={{borderColor: 'blue'}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={e => {
          if (!clicked.male) {
            setClick({...clicked, male: true, felmale: false});
          }

          if (e) {
            setFormData({
              ...FormData,
              gender: 'male',
            });
          }
        }}
      />
    </View>
  );
};

export default CheckBoxS;
