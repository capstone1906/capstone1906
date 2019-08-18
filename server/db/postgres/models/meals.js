const Sequelize = require('sequelize');
const db = require('../db');
const createMeal = require('../../neo4j/models/meals');


const Meals = db.define('meals', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '', //decide later
  },
  averageRating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.1,
      max: 5.0,
    },
  },

  totalCalories: {
    type: Sequelize.INTEGER,
  },
  totalCarbs: {
    type: Sequelize.INTEGER,
  },
  totalFat: {
    type: Sequelize.INTEGER,
  },
  totalProtein: {
    type: Sequelize.INTEGER,
  },
  dominantMacro: {
    type: Sequelize.STRING,
  },
  entreeType: {
    type: Sequelize.ENUM('Breakfast', 'Lunch', 'Dinner', 'Snacks'),
  },
});

Meals.beforeUpdate(async meal => {
  await createMeal(meal);
});

Meals.afterSave(async meal => {
  await createMeal(meal);
});

module.exports = Meals;
