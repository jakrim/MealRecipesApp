import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id} // keyExtractor knows to look for ID in modern Js, not necessary
        data={displayedMeals}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default CategoryMealsScreen;
