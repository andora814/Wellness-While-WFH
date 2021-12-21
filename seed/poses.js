const db = require('../db');
const Pose = require('../models/pose');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedPoses = async () => {
  const poses = [
    {
      english: 'Downward Facing Dog',
      sanskrit: 'Adho mukha svanasana',
      benefits:
        'One of the most familiar yoga postures, downward facing dog benefits include a stronger low back, hands, hamstrings, calves and wrists.',
      image:
        'https://thumbor.granitemedia.com/downward-facing-dog/KQT1LW5LUF5FqAhySANsRK0WkAY=/800x600/filters:format(webp):quality(80)/granite-web-prod/cf/a6/cfa675fbbc89492ea7903fdeaba2f780.jpg',
      description:
        'Form your body into an upside-down V or capital A shape. Hands and feet are about shoulder and hip distance apart as your hips lift up toward the sky. Make sure your palms are flat to the earth to protect your wrists, and point your middle fingers forward. Balance your weight through your upper and lower body, finding as much equilibrium as possible. Push the ground away to engage your shoulders and neck, and pull your abs in to reduce rounding through your low back. Heels can reach to the ground, but it’s okay if they don’t touch; bend your knees to lessen tension in your hamstrings.'
    },
    {
      english: 'Upward Facing Dog',
      sanskrit: 'Urdhva mukha svanasana',
      benefits:
        'Upward facing dog stretches and strengthens your spine while improving posture and opening your shoulders and chest.',
      image:
        'https://thumbor.granitemedia.com/upward-facing-dog/kBxPgteZGFewn0jIho0vmuQfTqM=/800x360/filters:format(webp):quality(80)/granite-web-prod/c5/eb/c5ebb07773c64818955c1ef894f19eaf.jpg',
      description:
        'Lay flat on your belly, looking down to lengthen your neck. Put your hands under your shoulders, then move them back a few inches toward your lower ribs, close to your sides. Root your pelvis into the ground, along with the tops of your feet. On an inhale, lift your chest away from the ground. Press through the tops of your feet until your knees lift away from the ground, but relax your glutes. Draw your elbows in and back. Keep your gaze down, and stay for 3-5 breaths, only rising up as far as feels safe for your low back.'
    },
    {
      english: `Childs Pose`,
      sanskrit: 'Balasana',
      benefits: `Child’s Pose, a restorative yoga posture, relaxes the front side of your body while stretching hips, ankles and thighs.`,
      image:
        'https://thumbor.granitemedia.com/childs-pose/cI-QlhvgBTllV6cA8_ihX47N4Dk=/800x362/filters:format(webp):quality(80)/granite-web-prod/29/e6/29e69568f22d4258bc16a931394a9038.jpg',
      description: `Kneel on the floor. Bring your big toes to touch as your knees move wide. Sink your hips toward heels and walk your hands forward until your forehead rests on the ground. Find a long spine as you inch your fingers forward and release your head and belly toward the floor. Let your eyes soften or close, and stay for 3-5 breaths or however long you need.`
    }
  ];

  await Pose.insertMany(poses);
  console.log('Created some poses!');
};
const run = async () => {
  await seedPoses();
  db.close();
};

run();
