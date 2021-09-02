import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ticket from './Ticket';

export const SolvedList = ({data, navigation, LocalStorage}) => {
  const [printer, setPrinter] = useState(false);
  const [call, setCall] = useState(true);

  const checkpoint = () => {
    data?.data.map(item => item.status === '2' && setPrinter(true));
    setCall(false);
  };

  const printData = () => {
    // console.log('====================================');
    // console.log('This is the printdata');
    // console.log(printer);
    // console.log('====================================');

    if (printer) {
      return data?.data.map(
        (item, index) =>
          item.status === '2' && (
            <Ticket
              navigation={navigation}
              key={index}
              data={item}
              LocalStorage={LocalStorage}
            />
          ),
      );
    } else {
      return <Text> Not Found Any</Text>;
    }
  };
  call && checkpoint();
  return <View>{printData()}</View>;
};

export const PendingList = ({data, navigation, LocalStorage}) => {
  const [printer, setPrinter] = useState(false);
  const [call, setCall] = useState(true);

  const checkpoint = () => {
    data?.data.map(item => item.status === '3' && setPrinter(true));
    setCall(false);
  };

  const printData = () => {
    // console.log('====================================');
    // console.log('This is the printdata');
    // console.log(printer);
    // console.log('====================================');

    if (printer) {
      return data?.data.map(
        (item, index) =>
          item.status === '3' && (
            <Ticket
              navigation={navigation}
              key={index}
              data={item}
              LocalStorage={LocalStorage}
            />
          ),
      );
    } else {
      return <Text> Not Found Any</Text>;
    }
  };
  call && checkpoint();
  return <View>{printData()}</View>;

  //   return (
  //     <View>
  //       {data.data.map((item, index) =>
  //         item.status === '1' ? (
  //           <Ticket
  //             navigation={navigation}
  //             key={index}
  //             data={item}
  //             LocalStorage={LocalStorage}
  //           />
  //         ) : null,
  //       )}
  //     </View>
  //   );
};

export const AllItemList = ({data, navigation, LocalStorage}) => {
  const [printer, setPrinter] = useState(false);
  const [call, setCall] = useState(true);

  const checkpoint = () => {
    data?.data.map(item => item.status === '1' && setPrinter(true));
    setCall(false);
  };

  const printData = () => {
    // console.log('====================================');
    // console.log('This is the printdata');
    // console.log(printer);
    // console.log('====================================');

    if (printer) {
      return data?.data.map(
        (item, index) =>
          item.status === '1' && (
            <Ticket
              navigation={navigation}
              key={index}
              data={item}
              LocalStorage={LocalStorage}
            />
          ),
      );
    } else {
      return <Text> Not Found Any</Text>;
    }
  };
  call && checkpoint();
  return <View>{printData()}</View>;

  //   return (
  //     <View>
  //       {data.data.map((item, index) => (
  //         <Ticket
  //           navigation={navigation}
  //           key={index}
  //           data={item}
  //           LocalStorage={LocalStorage}
  //         />
  //       ))}
  //     </View>
  //   );
};

// const styles = StyleSheet.create({});
