import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View style={styles.whiteBackground}>
      <SearchBar />
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: "#fff",
    height: "100%"
  }
})