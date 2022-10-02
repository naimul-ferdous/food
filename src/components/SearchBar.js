import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} color="black" />
      <TextInput style={styles.inputStyle} placeholder='Search' />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    padding: 5,
    flexDirection: "row",
    alignItems: "center"
  },

  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    padding: 5,
    marginLeft: 5
  }
})