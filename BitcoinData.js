import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BitcoinData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const localData = await AsyncStorage.getItem('bitcoinData');
      if (localData) {
        setData(JSON.parse(localData));
      } else {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then((response) => response.json())
          .then((data) => {
            setData(data.bpi);
            AsyncStorage.setItem('bitcoinData', JSON.stringify(data.bpi));
          });
      }
    };

    fetchData();
  }, []);

  return data;
};

export default BitcoinData; 