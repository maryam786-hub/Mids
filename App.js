import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BitcoinData from './BitcoinData';

const App = () => {
  const data = BitcoinData();

  return (
    <View style={styles.container}>
    <Text style={styles.headerText}>Bitcoin Rates</Text>
      <FlatList
        data={Object.values(data)}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              {item.description}: {item.rate}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent : 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
});

export default App;
