import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoryMeals = props => {
  return (
    <View style={styles.screen}>
      <Text> The Category Meals Screen </Text>
      <Button
        title='Go to Details'
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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
