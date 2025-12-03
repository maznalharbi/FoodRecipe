import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const navigation = useNavigation();

  // Assuming you have a similar structure for recipes in your Redux store
  const favoriteRecipes = useSelector((state) => state.favorites);
  const favoriteRecipesList = favoriteRecipes?.favoriterecipes || [];
  console.log('DEBUG - Full favorites state:', favoriteRecipes);
  console.log('DEBUG - Favorite recipes list:', favoriteRecipesList);
  console.log('DEBUG - List length:', favoriteRecipesList.length);
  
  

  if (favoriteRecipesList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite recipes yet!</Text>
        {/* add back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#2563EB",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            width: 100,
            alignItems: "center ",
          }}
        >
          <Text style={{ color: "#fff" }}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderFavoriteRecipe = ({ item }) => {
    if (!item) {
      return null;
    }

    // Determine if this is a custom recipe or a database recipe
    const isCustomRecipe = item.title && item.image && item.description && !item.recipeName;
    const displayTitle = isCustomRecipe ? item.title : item.recipeName;

    console.log('DEBUG - Rendering recipe:', { displayTitle, isCustomRecipe });

    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          if (isCustomRecipe) {
            navigation.navigate("CustomRecipesScreen", { recipe: item });
          } else {
            navigation.navigate("RecipeDetail", { recipe: item });
          }
        }}
        testID="favoriteRecipeCard"
      >
        <Image
          source={{ uri: isCustomRecipe ? item.image : item.recipeImage }}
          style={styles.recipeImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.recipeTitle} numberOfLines={2}>
            {isCustomRecipe
              ? item.title?.substring(0, 20)
              : item.recipeName?.substring(0, 20)
            }
            {(isCustomRecipe ? item.title : item.recipeName)?.length > 20 ? "..." : ""}
          </Text>
          <Text style={{ color: "#6B7280", fontSize: hp(1.5), marginTop: hp(0.5) }}>
            {isCustomRecipe ? "Custom Recipe" : item.recipeCategory}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Heading */}
        <View testID="FavoriteRecipes">
          <Text
            style={{
              fontSize: hp(3.8),
              marginTop: hp(2),
              marginLeft: 20,
              fontWeight: "600",
              color: "#4B5563",
            }}
          >
            My Favorite Recipes
          </Text>
        </View>

        {/* Go Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#2563EB",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            width: 100,
            alignItems: "center",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Go back</Text>
        </TouchableOpacity>
      </View>

      {/* Favorite Recipes List */}
      <FlatList
        data={favoriteRecipesList}
        keyExtractor={(item, index) => (item.idFood || item.id || item.recipeName || index.toString())}
        contentContainerStyle={styles.listContentContainer}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        renderItem={renderFavoriteRecipe}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  headerSection: {
    paddingBottom: hp(1),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: hp(2.5),
    color: "#6B7280", // text-neutral-600
  },
  listContentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    flexGrow: 1,
  },
  cardContainer: {
    backgroundColor: "white",
    marginBottom: hp(2),
    padding: wp(4),
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  recipeImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
    marginRight: wp(4),
  },
  recipeTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#4B5563", // text-neutral-700
  },
});
