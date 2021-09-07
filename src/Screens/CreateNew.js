import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// --- components ---
import Logo from '../Assets/Images/logo.png';
import CreateTicket from '../components/Form/Form';

const CreateNew = ({navigation}) => {
  const userData = navigation?.state?.params?.user;
  // console.log(userData);
  const [FormData, setFormData] = useState({
    user_id: userData?.id,
    assign_to: '',
    amc: '',
    category_id: '',
    brand_id: '',
    product_id: '',
    name: userData?.name,
    mail_from: userData?.email,
    subject: '',
    comment: '',
    status: 1,
  });

  const inputs = [
    {
      placeholder: 'Name',
      name: 'name',
      value: FormData.name,
      onChangeText: e => setFormData({...FormData, name: e}),
      edit: false,
    },
    {
      placeholder: 'Email',
      name: 'email',
      value: FormData.mail_from,
      onChangeText: e => setFormData({...FormData, mail_from: e}),
      edit: false,
    },
    {
      placeholder: 'Subject',
      name: 'subject',
      value: FormData.subject,
      onChangeText: e => setFormData({...FormData, subject: e}),
    },
    {
      placeholder: 'Support Code',
      name: 'assign_id',
      value: FormData.assign_id,
      onChangeText: e => setFormData({...FormData, assign_id: e}),
    },
    {
      placeholder: 'category',
      name: 'category_id',
      value: FormData.category_id,
      onChangeText: e => setFormData({...FormData, category_id: e}),
    },
    {
      placeholder: 'Brand',
      name: 'Brand',
      value: FormData.brand_id,
      onChangeText: e => setFormData({...FormData, brand_id: e}),
    },
    {
      placeholder: 'Product',
      name: 'product_id',
      value: FormData.product_id,
      onChangeText: e => setFormData({...FormData, product_id: e}),
    },
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      {inputs.map((item, index) => (
        <CreateTicket key={index} style={styles.inputLog} data={item} />
      ))}
      <Text style={styles.text}>Do you have AMC ?</Text>
      <Text style={styles.text}>YES</Text>
      <Text style={styles.text}>NO</Text>
      <Text style={styles.text}>Send</Text>
      <Text style={styles.text}>Cancel</Text>
    </View>
  );
};

export default CreateNew;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
});
