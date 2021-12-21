const db = require('../db');
const Pose = require('../models/pose');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedPoses = async () => {
  const poses = [
    {
      english: 'Downward Facing Dog',
      sanskrit: 'Adho Mukha Svanasana',
      benefits:
        'One of the most familiar yoga postures, downward facing dog benefits include a stronger low back, hands, hamstrings, calves and wrists.',
      image:
        'https://thumbor.granitemedia.com/downward-facing-dog/KQT1LW5LUF5FqAhySANsRK0WkAY=/800x600/filters:format(webp):quality(80)/granite-web-prod/cf/a6/cfa675fbbc89492ea7903fdeaba2f780.jpg',
      description:
        'Form your body into an upside-down V or capital A shape. Hands and feet are about shoulder and hip distance apart as your hips lift up toward the sky. Make sure your palms are flat to the earth to protect your wrists, and point your middle fingers forward. Balance your weight through your upper and lower body, finding as much equilibrium as possible. Push the ground away to engage your shoulders and neck, and pull your abs in to reduce rounding through your low back. Heels can reach to the ground, but it’s okay if they don’t touch; bend your knees to lessen tension in your hamstrings.'
    },
    {
      english: 'Upward Facing Dog',
      sanskrit: 'Urdhva Mukha Svanasana',
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
    },
    {
      english: 'Happy Baby',
      sanskrit: 'Ananda Balasana',
      benefits:
        'Happy Baby pose relieves stress and fatigue, but also opens your hips, inner thighs and groin while releasing tension in your low back.',
      image:
        'https://thumbor.granitemedia.com/happy-baby/T-mQCp1ewU4ZyHI61jST6YE5rJg=/800x800/filters:format(webp):quality(80)/granite-web-prod/51/88/5188128901124c60a95c9455b57b0aab.jpg',
      description:
        'Roll onto your back, and hug your knees into chest. Guide your knees to either side of your ribcage, and bend your knees quite a bit as you stack your heels over your knees. Press your lower back into the ground and soften your shoulders. Arms can move inside your legs, along the inner thighs, and hands may grab the backs of your hamstrings or reach to the outside edge of each foot. Stay and breathe, or rock a little from side-to-side.'
    },
    {
      english: 'Standing Forward Fold',
      sanskrit: 'Uttanasana',
      benefits:
        'Standing forward fold keeps your spine strong, stretches hips and hamstrings and strengthens thighs and knees.',
      image:
        'https://thumbor.granitemedia.com/forward-fold/nBg9zt_R2B4cuAM0mtB-4Tl5s-I=/800x800/filters:format(webp):quality(80)/granite-web-prod/a2/dd/a2dd1c64cbc0486ca90c938b2304d3bb.jpg',
      description:
        'Take your feet hip-width distance or a little wider. Center your weight in the middle of each foot as you stack hips over heels. Reach your hands toward the ground, feeling the stretch in the backs of your legs; you’ll know when to stop! Let your head hang heavy, and move it up and down, to the right and to the left, to reduce tension in your neck. Stay for 3-5 breaths.'
    },
    {
      english: 'Revolved Standing Forward Fold',
      sanskrit: 'Parivrtta Uttanasana',
      benefits:
        'For more stretch through your hamstrings and hips, explore a gentle twist from standing forward fold.',
      image:
        'https://thumbor.granitemedia.com/forward-fold-twist/KqT8HnOvlbioXC8JkWhh5mkBfgU=/800x800/filters:format(webp):quality(80)/granite-web-prod/05/81/0581f082abbc4608bc9d101c06cf7ed1.jpg',
      description:
        'Bend through both knees, and bring your right hand to the ground. Lift your left hand all the way up, slowly opening your chest toward the left. Experiment with your knees: a deep bend through your right knee can help you find more of a twist, but if you work to straighten your knees, you’ll experience more stretch in the backs of your legs. Hold for a few breaths, and switch to the other side.'
    },
    {
      english: 'Forearm Plank',
      sanskrit: 'Phalakasana II',
      benefits:
        'Forearm plank works your glutes and hamstrings, encourages good posture, improves balance and strengthens your core.',
      image:
        'https://thumbor.granitemedia.com/forearm-plank/oak4lfnABuikx_7qtwz6j4ETeJE=/800x466/filters:format(webp):quality(80)/granite-web-prod/2e/8c/2e8c8df9cdfb40fdb62cd4c92a091fb3.jpg',
      description:
        'Place your hands shoulder-width distance apart, and then come down to your forearms. With your forearms, make the shape of a number eleven: wrists directly forward of elbows, elbows directly under shoulders. Press your palms firmly into the ground. Step your feet all the way back into a plank position. Align your hips, shoulders and heels into one long line of energy. Activate the muscles in your legs and pull your belly up and in. Keeping shoulders over elbows, aim to stack your heels over toes, all with strong legs. Hold for 30 seconds to 1 minute, or in 10-second bursts to build endurance.'
    },
    {
      english: 'Warrior II',
      sanskrit: 'Virabhadrasana II',
      benefits:
        'Warrior II strengthens your legs and opens your hips and chest, as well as improves circulation and brings energy to your entire body.',
      image:
        'https://thumbor.granitemedia.com/warrior-ii/tIMzVhvfSG4HJlr2F21Su0naOt8=/800x640/filters:format(webp):quality(80)/granite-web-prod/11/3e/113e08691214480591d247fd891c9025.jpg',
      description:
        'Step your right foot forward and left foot back. Turn your left toes out to the left as you press down through your entire left foot. Bend your right knee, thigh parallel to the ground, and stack your knee directly over your right ankle as right toes point in the same direction. Keep your right knee from caving in toward your right big toe by pulling it back to center. Both legs are strong and energetic; squeeze your inner thighs. Sink your pelvis downward, as your lower belly and upper ribs knit in. Align your shoulders with your hips and reach your arms out in either direction. Keep your wrists in line with your shoulders. Look out over your right hand. Hold for 3-5 deep breaths, then repeat by stepping the left foot forward and completing the other side.'
    },
    {
      english: 'Thread the Needle',
      sanskrit: 'Urdhva Mukha Pasasana',
      benefits:
        'This pose relieves tension held most commonly in between your shoulder blades and upper back, and it also opens your shoulders, chest, upper back, neck and arms as as whole.',
      image:
        'https://thumbor.granitemedia.com/thread-the-needle/GBp5OGcPRiHCJAxQYmXsSiG45YM=/800x459/filters:format(webp):quality(80)/granite-web-prod/12/7a/127a05e91f754ba8b39baf1408840d54.jpg',
      description:
        'Start in a tabletop position: bring your hands and knees to the ground, then place your shoulders over hands and hips over knees with a neutral, flat back and engaged core. Tuck your toes under for more stability. Inhale your right arm up and out to the right, reaching fingertips toward the ceiling, and then slide your right arm under your body in between your left hand and left hip. Place your right shoulder and right cheek on the ground. Stretch your right hand out to the left side, and rest your left hand lightly by your face. Notice if your hips shift from one side to the other; try to keep them level, and if it helps, spread your knees another inch or two apart. Stay for 3-5 breaths. Come out of this posture the way you came into it by pressing into your left hand and lifting your right hand back up toward the ceiling, then repeat on the other side.'
    },
    {
      english: 'Yogi Squat',
      sanskrit: 'Malasana',
      benefits:
        'Malasana keeps your hip joints and pelvis healthy, and opens your hips and groin while stretching your lower hamstrings, back and ankles.',
      image:
        'https://thumbor.granitemedia.com/malasana/FTSY_TYQrnlCmg28I4uZKcl5nd0=/800x800/filters:format(webp):quality(80)/granite-web-prod/c7/95/c7951c2023a646b78ab6d597045b4d99.jpg',
      description:
        'Step your feet wider than your hips, and turn your toes outward. Squat down, and bring your elbows to the inside of where your knees meet your thighs. Press your hands together and level your forearms to the ground. Stretch the crown of your head up to the ceiling to create space between your shoulders and ears. With every breath, send your knees outward, hug your belly in tight and lift your chest while keeping arms strong and active. Hold for 3-5 breaths.'
    },
    {
      english: 'Crescent Moon',
      sanskrit: 'Anjaneyasana',
      benefits:
        'As a low lunge variation, this posture stretches your thighs and groin, and opens your chest.',
      image:
        'https://thumbor.granitemedia.com/crescent-moon/bFP4UB6S5HufjF1xqIXinpxLZgw=/800x800/filters:format(webp):quality(80)/granite-web-prod/4e/01/4e01a4944ea44a49aa19506a922b0ee9.jpg',
      description:
        'From your knees, carefully step your right foot forward and bring left leg back. Take a moment to inch your right foot forward and bring your left knee to the ground. Sink into this stretch, lowering your tailbone, until you feel a stretching sensation through the front of your left thigh. Hips are parallel to the front; continuously think about bringing your right hip back and left hip forward. Right knee aligns over right ankle, and the top of your left foot can release to the ground. Hold for 3-5 breaths, then repeat for an equal amount of time on the other side.'
    },
    {
      english: 'Standing Figure Four',
      sanskrit: 'Eka Pada Utkatasana',
      benefits:
        'Standing figure four combines balance work with increased hip mobility.',
      image:
        'https://thumbor.granitemedia.com/standing-figure-4/x5SDdBpq4O9ez2E9wEKA6TH9zSM=/600x800/filters:format(webp):quality(80)/granite-web-prod/92/1a/921afa36826b498b913999c46b43a496.jpg',
      description:
        'Stand tall on both feet, then bring your left knee in toward your chest. Cross your left ankle over the top of your right knee and flex your left foot. Send your hips down and back, as if you are sitting down in a chair, and press your left knee toward the left. Hands can come together at heart center or lift into the air. Gaze is down and slightly ahead of your standing big toe; hinge slightly forward while keeping your core engaged and a long spine.'
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
