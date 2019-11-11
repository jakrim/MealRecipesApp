import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CategoryMeals = props => {
  return (
    <View style={styles.screen}>
      <Text> The Category Meals Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default CategoryMeals;
