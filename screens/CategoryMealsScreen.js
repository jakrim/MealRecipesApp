import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id} // keyExtractor knows to look for ID in modern Js, not necessary to include
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
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
