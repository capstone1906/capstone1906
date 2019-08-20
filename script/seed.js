/* eslint-disable complexity */
/* eslint-disable max-statements */
'use strict';
const { green, red } = require('chalk');
const db = require('../server/db/postgres/db');

const {
  CheckIns,
  DailyGoals,
  Exercises,
  FoodItems,
  FavoriteMeals,
  LongTermGoals,
  Meals,
  MealFoodItems,
  UserMeals,
  Users,
} = require('../server/db/postgres/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  var user1 = {
    email: 'cody@email.com',
    password: '123',
    height: 72,
    weight: 185,
    age: 25,
    activityLevel: 1.375,
    bodyType: 'Ectomorph',
  };

  var user2 = {
    email: 'murphy@email.com',
    password: '123',
    height: 68,
    weight: 165,
    age: 22,
    activityLevel: 1.375,
    bodyType: 'Mesomorph',
  };

  // Create users
  await Promise.all([Users.create(user1), Users.create(user2)]);

  // Create checkIns
  for (let i = 1; i < 31; i++) {
    await CheckIns.create({
      weight: 200 - i / 4,
      caloriesBurned: Math.floor(500 - Math.random() * 100),
      caloriesConsumed: Math.floor(1500 - Math.random() * 100),
      userId: 1,
    });
  }

  // Create daily goal
  await DailyGoals.create({
    calorieLimit: 2000,
    caloriesToBurn: 200,
    carbLimit: 50,
    proteinLimit: 30,
    fatLimit: 10,
    userId: 1,
  });

  await DailyGoals.create({
    calorieLimit: 3000,
    caloriesToBurn: 500,
    carbLimit: 50,
    proteinLimit: 30,
    fatLimit: 10,
    userId: 2,
  });

  // Create Exercises
  await Promise.all([
    Exercises.create({
      met: 4.0,
      activity: 'Bicycling',
      description: '<10 mph, general leisure',
    }),
    Exercises.create({
      met: 6.0,
      activity: 'Bicycling',
      description: '10-11.9 mph, leisure, slow, light effort',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Bicycling',
      description: '12-13.9 mph, leisure, moderate effort',
    }),
    Exercises.create({
      met: 10.0,
      activity: 'Bicycling',
      description: '14-15.9 mph, racing, fast, vigorous effort',
    }),
    Exercises.create({
      met: 12.0,
      activity: 'Bicycling',
      description:
        '16-19 mph, racing/not drafing or > 19 mph drafting, very fast',
    }),
    Exercises.create({
      met: 16.0,
      activity: 'Bicycling',
      description: '>20 mph, racing, not drafting',
    }),
    Exercises.create({
      met: 3.0,
      activity: 'Cycling (stationary)',
      description: '50 watts, very light effort',
    }),
    Exercises.create({
      met: 5.5,
      activity: 'Cycling (stationary)',
      description: '100 watts, light effort',
    }),
    Exercises.create({
      met: 7.0,
      activity: 'Cycling (stationary)',
      description: '150 watts, moderate effort',
    }),
    Exercises.create({
      met: 10.5,
      activity: 'Cycling (stationary)',
      description: '200 watts, vigorous effort',
    }),
    Exercises.create({
      met: 12.5,
      activity: 'Cycling (stationary)',
      description: '250 watts, very vigorous effort',
    }),
    Exercises.create({
      met: 4.5,
      activity: 'Calisthenics',
      description: 'home exercise, light or moderate effort',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Calisthenics',
      description: 'vigorous effort (pushups, pullups, situps)',
    }),
    Exercises.create({
      met: 5.0,
      activity: 'Dancing',
      description: 'low impact, aerobic',
    }),
    Exercises.create({
      met: 6.0,
      activity: 'Dancing',
      description: 'aerobic, ballet or modern',
    }),
    Exercises.create({
      met: 7.0,
      activity: 'Dancing',
      description: 'high impact aerobic',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Running',
      description: '5 mph (12 min mile)',
    }),
    Exercises.create({
      met: 9.0,
      activity: 'Running',
      description: '5.2 mph (11.5 min mile)',
    }),
    Exercises.create({
      met: 10.0,
      activity: 'Running',
      description: '6.0 mph (10 min mile)',
    }),
    Exercises.create({
      met: 11.0,
      activity: 'Running',
      description: '6.7 mph, (9 min mile)',
    }),
    Exercises.create({
      met: 11.5,
      activity: 'Running',
      description: '7 mph, (8.5 min mile)',
    }),
    Exercises.create({
      met: 12.5,
      activity: 'Running',
      description: '7.5 mph, (8 min mile)',
    }),
    Exercises.create({
      met: 13.5,
      activity: 'Running',
      description: '8 mph, (7.5 min mile)',
    }),
    Exercises.create({
      met: 14.0,
      activity: 'Running',
      description: '8.6 mph, (7 min mile)',
    }),
    Exercises.create({
      met: 15.0,
      activity: 'Running',
      description: '9 mph, (6.5 min mile)',
    }),
    Exercises.create({
      met: 16.0,
      activity: 'Running',
      description: '10 mph, (6 min mile)',
    }),
    Exercises.create({
      met: 18.0,
      activity: 'Running',
      description: '10.9 mph, (5.5 min mile)',
    }),
    Exercises.create({
      met: 15.0,
      activity: 'Running',
      description: 'Running stairs',
    }),
    Exercises.create({
      met: 8.5,
      activity: 'Rowing machine',
      description: '150 watts, vigorous effort',
    }),
    Exercises.create({
      met: 12.0,
      activity: 'Rowing machine',
      description: '200 watts, very vigorous effort',
    }),
    Exercises.create({
      met: 7.0,
      activity: 'Skiing, cross country',
      description: '2.5 mph, slow or light effort, ski walking',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Skiing, cross country',
      description: '4.0-4.9 mph, moderate speed and effort',
    }),
    Exercises.create({
      met: 9.0,
      activity: 'Skiing, cross country',
      description: '5.0-7.9 mph, brisk speed, vigorous effort',
    }),
    Exercises.create({
      met: 14.0,
      activity: 'Skiing, cross country',
      description: '>8 mph, racing',
    }),
    Exercises.create({
      met: 16.5,
      activity: 'Skiing, cross country',
      description: 'hard snow, uphill, maximum',
    }),
    Exercises.create({
      met: 5.0,
      activity: 'Skiing, downhill',
      description: 'light effort',
    }),
    Exercises.create({
      met: 6.0,
      activity: 'Skiing, downhill',
      description: 'moderate effort',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Skiing, downhill',
      description: 'vigorous effort, racing',
    }),
    Exercises.create({
      met: 4.4,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 2',
    }),
    Exercises.create({
      met: 6.5,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 4',
    }),
    Exercises.create({
      met: 8.6,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 6',
    }),
    Exercises.create({
      met: 10.7,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 8',
    }),
    Exercises.create({
      met: 12.7,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 10',
    }),
    Exercises.create({
      met: 14.8,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 12',
    }),
    Exercises.create({
      met: 16.9,
      activity: 'Stairmaster 4400 PT',
      description: 'manual program, level 14',
    }),
    Exercises.create({
      met: 5.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 2',
    }),
    Exercises.create({
      met: 7.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 4',
    }),
    Exercises.create({
      met: 9.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 6',
    }),
    Exercises.create({
      met: 11.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 8',
    }),
    Exercises.create({
      met: 13.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 10',
    }),
    Exercises.create({
      met: 15.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 12',
    }),
    Exercises.create({
      met: 17.0,
      activity: 'Stairmaster Stepmill 7000 PT',
      description: 'exercise stage 14',
    }),
    Exercises.create({
      met: 6.0,
      activity: 'Swimming',
      description: 'leisurely, not lap swimming',
    }),
    Exercises.create({
      met: 8.0,
      activity: 'Swimming',
      description: 'backstroke, general',
    }),
    Exercises.create({
      met: 10.0,
      activity: 'Swimming',
      description: 'breaststroke, general',
    }),
    Exercises.create({
      met: 11.0,
      activity: 'Swimming',
      description: 'butterfly, general',
    }),
    Exercises.create({
      met: 2.5,
      activity: 'Walking',
      description: '2 mph, level, slow pace, firm surface',
    }),
    Exercises.create({
      met: 3.0,
      activity: 'Walking',
      description: '2.5 mph, firm surface',
    }),
    Exercises.create({
      met: 3.5,
      activity: 'Walking',
      description: '3 mph, level, moderate pace, firm surface',
    }),
    Exercises.create({
      met: 4.0,
      activity: 'Walking',
      description: '3.5-4 mph, level, brisk, firm surface',
    }),
    Exercises.create({
      met: 4.5,
      activity: 'Walking',
      description: '4.5 mph, level, firm surface, very very brisk',
    }),
    Exercises.create({
      met: 6.5,
      activity: 'Walking',
      description: 'racewalking',
    }),
  ]);

  // Create food items
  //breakfast
  const food1 = {
    foodName: 'banana',
    calories: 105,
    fat: 1,
    carbohydrates: 27,
    protein: 2,
    servingSize: `medium (7" to 7-7/8" long)`,
    weight: 118,
  };

  const food2 = {
    foodName: 'cocoa puffs',
    calories: 138,
    fat: 2,
    carbohydrates: 30,
    protein: 2,
    servingSize: 'cup',
    weight: 36,
  };
  const food3 = {
    foodName: 'Protein Shake',
    calories: 171,
    fat: 9,
    carbohydrates: 3,
    protein: 20,
    servingSize: 'bottle',
    weight: 295,
  };
  const food4 = {
    foodName: 'egg',
    calories: 72,
    fat: 5,
    carbohydrates: 1,
    protein: 7,
    servingSize: 'large',
    weight: 50,
  };
  const food5 = {
    foodName: 'cottage cheese',
    calories: 214,
    fat: 10,
    carbohydrates: 8,
    protein: 24,
    servingSize: 'cup',
    weight: 218,
  };
  const food6 = {
    foodName: 'oatmeal',
    calories: 167,
    fat: 4,
    carbohydrates: 29,
    protein: 6,
    servingSize: 'cup',
    weight: 234,
  };
  const food7 = {
    foodName: 'bacon',
    calories: 54,
    fat: 5,
    carbohydrates: 1,
    protein: 4,
    servingSize: 'strip',
    weight: 12,
  };
  const food8 = {
    foodName: 'english muffin',
    calories: 134,
    fat: 1,
    carbohydrates: 27,
    protein: 5,
    servingSize: 'muffin',
    weight: 57,
  };
  const food9 = {
    foodName: 'breakfast sausage',
    calories: 75,
    fat: 7,
    carbohydrates: 1,
    protein: 5,
    servingSize: 'link',
    weight: 23,
  };
  const food10 = {
    foodName: 'toast',
    calories: 64,
    fat: 1,
    carbohydrates: 12,
    protein: 2,
    servingSize: 'slice',
    weight: 22,
  };

  //lunch
  const food11 = {
    foodName: 'rice',
    calories: 205,
    fat: 1,
    carbohydrates: 45,
    protein: 5,
    servingSize: '1 cup',
    weight: 158,
  };
  const food12 = {
    foodName: 'broccoli',
    calories: 13,
    fat: 1,
    carbohydrates: 3,
    protein: 1,
    servingSize: `spear (about 5" long)`,
    weight: 37,
  };
  const food13 = {
    foodName: 'chicken breast',
    calories: 198,
    fat: 5,
    carbohydrates: 0,
    protein: 38,
    servingSize: 'breast',
    weight: 120,
  };
  const food14 = {
    foodName: 'brussel sprouts',
    calories: 61,
    fat: 1,
    carbohydrates: 12,
    protein: 5,
    servingSize: '8 sprouts',
    weight: 168,
  };
  const food15 = {
    foodName: 'cheddar cheese',
    calories: 115,
    fat: 10,
    carbohydrates: 1,
    protein: 7,
    servingSize: 'oz',
    weight: 29,
  };
  const food16 = {
    foodName: 'tomato',
    calories: 23,
    fat: 1,
    carbohydrates: 5,
    protein: 1,
    servingSize: `medium whole (2.5" dia)`,
    weight: 123,
  };
  const food17 = {
    foodName: 'hamburger',
    calories: 540,
    fat: 27,
    carbohydrates: 41,
    protein: 35,
    servingSize: 'sandwich',
    weight: 226,
  };
  const food18 = {
    foodName: 'pickle',
    calories: 5,
    fat: 0,
    carbohydrates: 1,
    protein: 0,
    servingSize: 'spear',
    weight: 35,
  };
  const food19 = {
    foodName: 'hummus',
    calories: 400,
    fat: 24,
    carbohydrates: 36,
    protein: 20,
    servingSize: 'cup',
    weight: 240,
  };
  const food20 = {
    foodName: 'pita chips',
    calories: 130,
    fat: 4,
    carbohydrates: 20,
    protein: 4,
    servingSize: 'oz',
    weight: 29,
  };

  //dinner
  const food21 = {
    foodName: 'pizza',
    calories: 285,
    fat: 11,
    carbohydrates: 36,
    protein: 13,
    servingSize: 'slice',
    weight: 108,
  };
  const food22 = {
    foodName: 'can of tuna',
    calories: 220,
    fat: 5,
    carbohydrates: 0,
    protein: 41,
    servingSize: 'can',
    weight: 172,
  };

  const food23 = {
    foodName: 'salmon',
    calories: 468,
    fat: 28,
    carbohydrates: 0,
    protein: 51,
    servingSize: 'fillet',
    weight: 227,
  };
  const food24 = {
    foodName: 'pasta',
    calories: 196,
    fat: 2,
    carbohydrates: 39,
    protein: 8,
    servingSize: 'cup',
    weight: 124,
  };

  const food25 = {
    foodName: 'sushi',
    calories: 349,
    fat: 19,
    carbohydrates: 38,
    protein: 8,
    servingSize: `roll (8 pieces)`,
    weight: 211,
  };
  const food26 = {
    foodName: 'meatloaf',
    calories: 330,
    fat: 19,
    carbohydrates: 14,
    protein: 27,
    servingSize: 'slice',
    weight: 183,
  };
  const food27 = {
    foodName: 'sweet potato',
    calories: 115,
    fat: 1,
    carbohydrates: 27,
    protein: 2,
    servingSize: 'medium',
    weight: 151,
  };
  const food28 = {
    foodName: 'steak',
    calories: 79,
    fat: 6,
    carbohydrates: 0,
    protein: 8,
    servingSize: 'oz',
    weight: 29,
  };
  const food29 = {
    foodName: 'zucchini',
    calories: 33,
    fat: 1,
    carbohydrates: 6,
    protein: 3,
    servingSize: 'medium',
    weight: 217,
  };
  const food30 = {
    foodName: 'bread roll',
    calories: 77,
    fat: 2,
    carbohydrates: 13,
    protein: 3,
    servingSize: 'roll',
    weight: 28,
  };
  //snacks
  const food31 = {
    foodName: 'apple',
    calories: 95,
    fat: 1,
    carbohydrates: 25,
    protein: 1,
    servingSize: `medium (3" dia)`,
    weight: 182,
  };
  const food32 = {
    foodName: 'ritz crackers',
    calories: 17,
    fat: 1,
    carbohydrates: 2,
    protein: 1,
    servingSize: 'cracker',
    weight: 4,
  };

  const food33 = {
    foodName: 'almond',
    calories: 8,
    fat: 1,
    carbohydrates: 1,
    protein: 1,
    servingSize: 'almond',
    weight: 2,
  };
  const food34 = {
    foodName: 'avocado',
    calories: 321,
    fat: 30,
    carbohydrates: 18,
    protein: 4,
    servingSize: 'medium',
    weight: 201,
  };
  const food35 = {
    foodName: 'blueberries',
    calories: 1,
    fat: 0,
    carbohydrates: 1,
    protein: 0,
    servingSize: 'berry',
    weight: 2,
  };
  const food36 = {
    foodName: 'granola bar',
    calories: 118,
    fat: 5,
    carbohydrates: 20,
    protein: 2,
    servingSize: 'bar',
    weight: 28,
  };
  const food37 = {
    foodName: 'cashews',
    calories: 162,
    fat: 14,
    carbohydrates: 10,
    protein: 5,
    servingSize: 'oz',
    weight: 28,
  };
  const food38 = {
    foodName: 'dried apricot',
    calories: 69,
    fat: 1,
    carbohydrates: 18,
    protein: 1,
    servingSize: 'oz',
    weight: 28,
  };
  const food39 = {
    foodName: 'beef stick',
    calories: 116,
    fat: 11,
    carbohydrates: 1,
    protein: 5,
    servingSize: 'stick',
    weight: 23,
  };
  const food40 = {
    foodName: 'strawberry',
    calories: 6,
    fat: 0,
    carbohydrates: 2,
    protein: 1,
    servingSize: 'large',
    weight: 18,
  };

  await Promise.all([
    FoodItems.create(food1),
    FoodItems.create(food2),
    FoodItems.create(food3),
    FoodItems.create(food4),
    FoodItems.create(food5),
    FoodItems.create(food6),
    FoodItems.create(food7),
    FoodItems.create(food8),
    FoodItems.create(food9),
    FoodItems.create(food10),
    FoodItems.create(food11),
    FoodItems.create(food12),
    FoodItems.create(food13),
    FoodItems.create(food14),
    FoodItems.create(food15),
    FoodItems.create(food16),
    FoodItems.create(food17),
    FoodItems.create(food18),
    FoodItems.create(food19),
    FoodItems.create(food20),
    FoodItems.create(food21),
    FoodItems.create(food22),
    FoodItems.create(food23),
    FoodItems.create(food24),
    FoodItems.create(food25),
    FoodItems.create(food26),
    FoodItems.create(food27),
    FoodItems.create(food28),
    FoodItems.create(food29),
    FoodItems.create(food30),
    FoodItems.create(food31),
    FoodItems.create(food32),
    FoodItems.create(food33),
    FoodItems.create(food34),
    FoodItems.create(food35),
    FoodItems.create(food36),
    FoodItems.create(food37),
    FoodItems.create(food38),
    FoodItems.create(food39),
    FoodItems.create(food40),
  ]);

  //Breakfast
  const meal1 = {
    name: 'Power Breakfast',
    entreeType: 'Breakfast',
  };

  var meal2 = {
    name: 'Great Dish 2',
    entreeType: 'Breakfast',
  };

  var meal3 = {
    name: 'Great Dish 3',
    entreeType: 'Breakfast',
  };

  var meal4 = {
    name: 'Great Dish 4',
    entreeType: 'Breakfast',
  };

  var meal5 = {
    name: 'Great Dish 5',
    entreeType: 'Breakfast',
  };
  //lunch
  var meal6 = {
    name: 'Great Dish 6',
    entreeType: 'Lunch',
  };

  var meal7 = {
    name: 'Great Dish 7',
    entreeType: 'Lunch',
  };

  var meal8 = {
    name: 'Great Dish 8',
    entreeType: 'Lunch',
  };

  var meal9 = {
    name: 'Great Dish 9',
    entreeType: 'Lunch',
  };

  var meal10 = {
    name: 'Great Dish 10',
    entreeType: 'Dinner',
  };
  //dinner
  var meal11 = {
    name: 'Great Dish 11',
    entreeType: 'Dinner',
  };

  var meal12 = {
    name: 'Great Dish 12',
    entreeType: 'Dinner',
  };

  var meal13 = {
    name: 'Great Dish 13',
    entreeType: 'Dinner',
  };

  //snacks
  var meal14 = {
    name: 'Great Dish 14',
    entreeType: 'Snacks',
  };

  var meal15 = {
    name: 'Great Dish 15',
    entreeType: 'Snacks',
  };
  // Create meals
  await Promise.all([
    Meals.create(meal1),
    Meals.create(meal2),
    Meals.create(meal3),
    Meals.create(meal4),
    Meals.create(meal5),
    Meals.create(meal6),
    Meals.create(meal7),
    Meals.create(meal8),
    Meals.create(meal9),
    Meals.create(meal10),
    Meals.create(meal11),
    Meals.create(meal12),
    Meals.create(meal13),
    Meals.create(meal14),
    Meals.create(meal15),
  ]);

  var yesterday = `07-31-2019`;
  // var ranDay = new Date(yesterday);

  // Create longTermGoals
  for (let i = 1; i <= 2; i++) {
    await LongTermGoals.create({
      startWeight: 200,
      endingWeight: 180,
      startDate: yesterday,
      endDate: '10-31-2019',
      userId: i,
      statedGoal: 'Lose 1 lb a week',
    });
  }

  // Create mealFoodItems breakfast
  // for (let i = 1; i <= 15; i++) {
  //   for (let j = 1; j <= 3; j++) {
  //     await MealFoodItems.create({
  //       foodItemId: 1 + Math.floor(Math.random() * 10),
  //       mealId: i,
  //     });
  //   }
  // }

  // const breakfastMeals = [];
  // for (let i = 1; i < 40; i++) {
  //   let arr = [];
  //   while (arr.length < 3) {
  //     let random = Math.floor(Math.random() * 10) + 1;
  //     if (arr.indexOf(random) === -1) arr.push(random);
  //   }
  //   arr.map(id => {
  //     breakfastMeals.push({
  //       foodItemId: id,
  //       mealId: i,
  //     });
  //   });
  // }

  const breakfastMeals = [];
  for (let i = 1; i < 15; i++) {
    let arr = [];
    while (arr.length < 3) {
      let random = Math.floor(Math.random() * 10) + 1;
      if (arr.indexOf(random) === -1) arr.push(random);
    }
    for (let j = 0; j < arr.length; j++) {
      breakfastMeals.push(
        MealFoodItems.create({
          foodItemId: arr[j],
          mealId: i,
        })
      );
    }
  }

  await Promise.all(breakfastMeals);

  for (let i = 1; i <= 15; i++) {
    await UserMeals.create({
      mealId: i,
      userId: 1 + Math.floor(Math.random() * 2),
    });
  }

  // Create Favorite meal
  for (let i = 1; i <= 5; i++) {
    await FavoriteMeals.create({
      mealId: i,
      userId: 1,
    });
  }
  console.log(green(`seeded successfully`));
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(red(err));
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}
