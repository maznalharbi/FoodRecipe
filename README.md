# 🍽️ Food Recipe App

A powerful React Native application for browsing, creating, and managing food recipes with favorites management.

## 📱 Features

- **Browse Recipes**: Explore a collection of delicious recipes organized by categories
- **Search & Filter**: Filter recipes by different food categories
- **Recipe Details**: View complete recipe information including ingredients, instructions, cooking time, servings, and calories
- **Favorites**: Add/remove recipes to your personal favorites list with Redux state management
- **Create Custom Recipes**: Create and manage your own recipes with AsyncStorage persistence
- **Edit & Delete**: Full CRUD operations for custom recipes
- **Responsive Design**: Beautiful UI that works on all device sizes

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **Data Persistence**: AsyncStorage for custom recipes
- **Navigation**: React Navigation (Stack Navigator)
- **UI Components**: React Native built-ins
- **Styling**: Responsive design with `react-native-responsive-screen`
- **Animations**: React Reanimated

## 📂 Project Structure

```
src/
├── components/
│   ├── categories.js      # Category selection component
│   └── recipes.js         # Recipe grid display
├── screens/
│   ├── WelcomeScreen.js        # Splash screen with animations
│   ├── HomeScreen.js           # Main recipe browsing screen
│   ├── RecipeDetailScreen.js   # Database recipe details
│   ├── CustomRecipesScreen.js  # Custom recipe display
│   ├── RecipesFormScreen.js    # Recipe creation/editing form
│   ├── MyRecipeScreen.js       # User's custom recipes management
│   └── FavoriteScreen.js       # Favorite recipes list
├── redux/
│   ├── favoritesSlice.js  # Redux state for favorites
│   └── store.js           # Redux store configuration
└── navigation/
    └── index.js           # Navigation configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- React Native development environment

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/maznalharbi/FoodRecipe.git
cd FoodRecipe
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the app**
```bash
expo start
# or
npm start
```

4. **Run on device**
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your phone

## 📋 Features Explained

### Database Recipes
- Browse pre-loaded recipes with complete information
- View ingredients, cooking instructions, nutrition info
- Add to favorites with one tap
- Access from home screen by category

### Custom Recipes
- Create your own recipes with title, image, and description
- Edit existing recipes
- Delete recipes you no longer need
- All data stored locally on your device

### Favorites Management
- Redux-based state management for favorites
- Persistent across app sessions
- Quick access to favorite recipes
- Works with both database and custom recipes

## 🔧 Redux State Structure

```javascript
{
  favorites: {
    favoriterecipes: [
      {
        idFood: "1",
        recipeName: "Beef and Mustard Pie",
        recipeImage: "...",
        recipeCategory: "Beef",
        // ... other recipe data
      }
    ]
  }
}
```

## 🐛 Bug Fixes

### Latest Fixes (v1.0)
- ✅ Fixed favorites toggle - prevents all recipes from being marked as favorite
- ✅ Fixed FavoriteScreen display - proper FlatList rendering with flexGrow
- ✅ Fixed recipe data extraction in navigation - proper null safety checks
- ✅ Improved recipe identification for custom vs database recipes

## 📸 Screenshots

- **Home Screen**: Browse recipes by category
- **Recipe Details**: View complete recipe information
- **Favorites**: Access all your favorite recipes
- **My Recipes**: Manage your custom recipes

## 🎯 Future Enhancements

- [ ] Add search functionality across recipes
- [ ] Implement recipe ratings and reviews
- [ ] Add meal planning features
- [ ] Sync favorites across devices
- [ ] Add shopping list from recipe ingredients
- [ ] Implement recipe sharing
- [ ] Add nutrition tracking

## 📝 License

This project is open source and available under the [LICENSE](LICENSE) file.

## 👨‍💻 Author

**Mazn Alharbi**
- GitHub: [@maznalharbi](https://github.com/maznalharbi)
- Project: [Food Recipe App](https://github.com/maznalharbi/FoodRecipe)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an [Issue](https://github.com/maznalharbi/FoodRecipe/issues) on GitHub.

---

Made with ❤️ by Mazn Alharbi
