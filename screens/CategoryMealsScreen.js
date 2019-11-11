import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMeals = props => {
  const categoryId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text> The Category Meals Screen </Text>
      <Text>{selectedCategory.title}</Text>
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
// CategoryMeals.navigationOptions = {
//   headerTitle: catId
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default CategoryMeals;
