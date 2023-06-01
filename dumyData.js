const dummyData = [
  {
    code: 0.07,
    title: "garbage on road",
    description: "A lot of garbage on the road side. This should be removed.",
  },
  {
    code: 1.23,
    title: "broken streetlamp",
    description:
      "A streetlamp near the park is not working. It needs to be fixed.",
  },
  {
    code: 2.45,
    title: "pothole on Main Street",
    description:
      "There is a large pothole on Main Street. It poses a risk to vehicles.",
  },
  {
    code: 0.91,
    title: "graffiti on public wall",
    description:
      "Someone has spray-painted graffiti on a public wall. It needs to be cleaned.",
  },
  {
    code: 0.17,
    title: "park maintenance required",
    description:
      "The park benches and pathways need maintenance. They are in poor condition.",
  },
  {
    code: 0.57,
    title: "faded road markings",
    description:
      "The road markings near the intersection have faded. They should be repainted.",
  },
  {
    code: 0.33,
    title: "abandoned vehicle",
    description:
      "There is an abandoned vehicle parked on the street. It needs to be towed.",
  },
  {
    code: 0.84,
    title: "overgrown bushes",
    description:
      "The bushes on the sidewalk have overgrown and obstruct the pedestrian path.",
  },
  {
    code: 1.11,
    title: "damaged bus stop",
    description:
      "The bus stop sign has been knocked down. It needs to be repaired.",
  },
  {
    code: 2.99,
    title: "leaky fire hydrant",
    description:
      "There is a leak in the fire hydrant on Elm Street. It should be fixed.",
  },
  {
    code: 0.46,
    title: "broken sidewalk",
    description:
      "A portion of the sidewalk is cracked and poses a tripping hazard.",
  },
  {
    code: 0.68,
    title: "parking meter not working",
    description:
      "The parking meter on 5th Avenue is not accepting payments. It should be repaired.",
  },
  {
    code: 1.76,
    title: "flooded basement",
    description:
      "A basement in the neighborhood has been flooded due to heavy rain. Assistance is required.",
  },
  {
    code: 0.92,
    title: "unmaintained playground",
    description:
      "The playground equipment is in poor condition and needs maintenance.",
  },
  {
    code: 1.39,
    title: "abandoned shopping cart",
    description:
      "An abandoned shopping cart is blocking the sidewalk near the supermarket.",
  },
  {
    code: 0.62,
    title: "vandalized public restroom",
    description:
      "The public restroom in the park has been vandalized and requires cleaning.",
  },
  {
    code: 0.28,
    title: "broken fence",
    description:
      "The fence surrounding the community garden has a section that is broken.",
  },
  {
    code: 1.55,
    title: "uneven pavement",
    description:
      "The pavement on Maple Avenue is uneven and poses a tripping hazard.",
  },
  {
    code: 2.13,
    title: "street sign missing",
    description:
      "The street sign at the intersection of Oak Street and Pine Street is missing.",
  },
  {
    code: 0.78,
    title: "blocked storm drain",
    description:
      "The storm drain on Cherry Lane is blocked by debris. It needs to be cleared.",
  },
  {
    code: 1.04,
    title: "broken bicycle rack",
    description:
      "The bicycle rack near the library is broken. It needs to be replaced.",
  },
  {
    code: 0.21,
    title: "excessive noise",
    description:
      "There is excessive noise coming from a nearby construction site. It is causing disturbance.",
  },
  {
    code: 0.98,
    title: "foul odor",
    description:
      "There is a foul odor near the dumpster behind the restaurant. It needs to be addressed.",
  },
  {
    code: 1.87,
    title: "fallen tree",
    description:
      "A tree has fallen across the road, blocking the traffic. It needs to be removed.",
  },
  {
    code: 0.75,
    title: "broken crosswalk signal",
    description:
      "The crosswalk signal at the busy intersection is not functioning. It needs to be repaired.",
  },
  {
    code: 0.36,
    title: "dog waste not picked up",
    description:
      "Dog waste has not been picked up from the park. It should be cleaned.",
  },
  {
    code: 1.62,
    title: "malfunctioning elevator",
    description:
      "The elevator in the apartment building is not working properly. It needs maintenance.",
  },
  {
    code: 0.82,
    title: "overflowing trash bin",
    description:
      "The trash bin near the bus stop is overflowing. It needs to be emptied.",
  },
  {
    code: 2.29,
    title: "broken water pipe",
    description:
      "There is a broken water pipe on the sidewalk. It is causing water leakage.",
  },
  {
    code: 0.43,
    title: "stray animals",
    description:
      "There are stray animals roaming around the neighborhood. Animal control should be notified.",
  },
  {
    code: 1.18,
    title: "untrimmed trees",
    description:
      "The trees on the street have overgrown branches. They should be trimmed.",
  },
  {
    code: 0.95,
    title: "blocked bike lane",
    description:
      "The bike lane is blocked by parked cars. It needs to be cleared for cyclists.",
  },
  {
    code: 1.75,
    title: "damaged sidewalk railing",
    description:
      "The sidewalk railing is damaged near the park. It needs repair.",
  },
  {
    code: 0.67,
    title: "broken playground equipment",
    description:
      "One of the swings in the playground is broken. It needs to be fixed.",
  },
  {
    code: 0.28,
    title: "street light flickering",
    description:
      "The street light on the corner of Elm Street and Oak Avenue is flickering.",
  },
  {
    code: 2.17,
    title: "clogged drain",
    description:
      "The drain in front of the supermarket is clogged. It needs to be unclogged.",
  },
  {
    code: 0.81,
    title: "unsecured manhole cover",
    description:
      "The manhole cover on the street is unsecured. It needs to be properly secured.",
  },
  {
    code: 0.35,
    title: "damaged park bench",
    description:
      "One of the park benches is damaged and unsafe to use. It should be repaired.",
  },
  {
    code: 1.11,
    title: "blocked fire hydrant",
    description:
      "A vehicle is parked in front of a fire hydrant, blocking access.",
  },
  {
    code: 0.64,
    title: "broken bus shelter window",
    description:
      "The window of the bus shelter is broken. It needs to be replaced.",
  },
  {
    code: 1.45,
    title: "overgrown weeds",
    description:
      "There are overgrown weeds in the vacant lot. It needs to be cleared.",
  },
  {
    code: 0.99,
    title: "damaged road sign",
    description:
      "The road sign at the intersection is damaged and needs to be repaired.",
  },
  {
    code: 1.27,
    title: "stray shopping carts",
    description:
      "There are stray shopping carts scattered across the parking lot. They should be collected.",
  },
  {
    code: 0.73,
    title: "flickering traffic light",
    description:
      "The traffic light at the busy intersection is flickering. It needs to be fixed.",
  },
  {
    code: 2.68,
    title: "loose electrical wires",
    description:
      "There are loose electrical wires hanging near the playground. It is dangerous.",
  },
  {
    code: 1.23,
    title: "damaged fence",
    description:
      "The fence around the construction site is damaged. It needs to be repaired.",
  },
  {
    code: 0.55,
    title: "broken water fountain",
    description:
      "The water fountain in the park is broken. It needs to be repaired.",
  },
  {
    code: 0.94,
    title: "illegal dumping",
    description:
      "There has been illegal dumping of trash near the riverbank. It needs to be cleaned.",
  },
  {
    code: 1.16,
    title: "uneven steps",
    description:
      "The steps leading to the library entrance are uneven. They need to be leveled.",
  },
  {
    code: 0.69,
    title: "damaged street bench",
    description: "One of the street benches is damaged and needs repair.",
  },
  {
    code: 2.31,
    title: "excessive speeding",
    description:
      "There is excessive speeding on Maple Avenue. Traffic calming measures are required.",
  },
  {
    code: 0.87,
    title: "broken playground swing",
    description:
      "One of the swings in the playground is broken and needs to be fixed.",
  },
  {
    code: 1.02,
    title: "blocked sidewalk",
    description:
      "The sidewalk is blocked by construction materials. Pedestrians are having difficulty.",
  },
  {
    code: 2.45,
    title: "graffiti on park walls",
    description:
      "The walls in the park have been vandalized with graffiti. It needs to be cleaned.",
  },
  {
    code: 0.75,
    title: "inadequate street lighting",
    description:
      "The street lighting on Oak Street is inadequate. It needs to be improved.",
  },
  {
    code: 1.09,
    title: "loose manhole cover",
    description:
      "The manhole cover on 10th Avenue is loose. It needs to be properly secured.",
  },
  {
    code: 0.52,
    title: "broken handrail",
    description:
      "The handrail on the staircase near the community center is broken.",
  },
  {
    code: 2.12,
    title: "abandoned construction site",
    description:
      "The construction site on Maple Lane has been abandoned. It needs attention.",
  },
];

module.exports = dummyData;
