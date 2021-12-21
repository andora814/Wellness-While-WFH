const db = require('../db');
const Tip = require('../models/tip');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedTips = async () => {
  const tips = [
    {
      name: 'Doran',
      description: `Keep a consistent sleep schedule: Try your best to go to bed at the same time and wake up at the same time, even if you don't have any morning meetings. This will help give your day some structure and consistency.`
    },
    {
      name: 'Dave',
      description: `Find a dedicated work space: It's difficult to find a work life balance when your office is in your main living space. If possible, move your work space to a separate area (maybe a guest room or a specific corner of your kitchen table) so that you can better compartmentalize work and non-work.`
    },
    {
      name: 'Jen',
      description: `Create brain breaks: Commuting, while not always fun or stress-free, provided time twice a day to get away from the computer screen and focus on something other than work. Without a commute, it's important to schedule time for yourself and step away from the laptop.`
    }
  ];

  await Tip.insertMany(tips);
  console.log('Created some tips!');
};
const run = async () => {
  await seedTips();
  db.close();
};

run();
