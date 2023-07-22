import { IExamsData, IQuestionData } from "@/types/types";

import { v4 as uuidv4 } from "uuid";

export const testimonials = [
  {
    name: "Jesse",
    avatar: "J",
    title: "Student UNN Nuska",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Jephthah",
    avatar: "J",
    title: "Student IMT Enugu",
    description: "I used this app  for my JAMB",
  },
  {
    name: "Wisdom",
    avatar: "W",
    title: "Student ESUT",
    description: "This app helped me pass my JAMB Exam!",
  },
  {
    name: "Rita",
    avatar: "R",
    title: "Student",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

export const examsData: IExamsData = {
  result: 1,
  message: "Success",
  examTypes: [
    {
      id: uuidv4(),
      name: "JAMB",
      examCat: "jamb1",
      subjects: [
        {
          id: uuidv4(),
          name: "English",
          examYears: [2010, 2011, 2012, 2013, 2014, 2015],
        },
        {
          id: uuidv4(),
          name: "Mathematics",
          examYears: [2013, 2014, 2015, 2010],
        },
        {
          id: uuidv4(),
          name: "Chemistry",
          examYears: [2015, 2017, 2020],
        },
        {
          id: uuidv4(),
          name: "Physics",
          examYears: [2011, 2019, 2023],
        },
        {
          id: uuidv4(),
          name: "Economics",
          examYears: [2011, 2019, 2023],
        },
        {
          id: uuidv4(),
          name: "Government",
          examYears: [2011, 2019, 2023],
        },
        {
          id: uuidv4(),
          name: "Civic Edu",
          examYears: [2011, 2019, 2023],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "WASSCE",
      examCat: "wassce1",
      subjects: [
        {
          id: uuidv4(),
          name: "Economics",
          examYears: [2010, 2011, 2014],
        },
        {
          id: uuidv4(),
          name: "Mathematics",
          examYears: [2012, 2014, 2015],
        },
        {
          id: uuidv4(),
          name: "Biology",
          examYears: [2015, 2018, 2020],
        },
        {
          id: uuidv4(),
          name: "Physics",
          examYears: [2011, 2022, 2023],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "NECO",
      examCat: "neco1",
      subjects: [
        {
          id: uuidv4(),
          name: "English",
          examYears: [2010, 2011, 2012],
        },
        {
          id: uuidv4(),
          name: "Mathematics",
          examYears: [2013, 2014, 2015],
        },
        {
          id: uuidv4(),
          name: "Chemistry",
          examYears: [2015, 2017, 2020],
        },
        {
          id: uuidv4(),
          name: "Physics",
          examYears: [2011, 2019, 2023],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "POST-UME",
      examCat: "postume1",
      subjects: [
        {
          id: uuidv4(),
          name: "English",
          examYears: [2010, 2011, 2012],
        },
        {
          id: uuidv4(),
          name: "Mathematics",
          examYears: [2013, 2014, 2015],
        },
        {
          id: uuidv4(),
          name: "Chemistry",
          examYears: [2015, 2017, 2020],
        },
        {
          id: uuidv4(),
          name: "Physics",
          examYears: [2011, 2019, 2023],
        },
      ],
    },
  ],
};

export const questionData: IQuestionData = {
  result: 1,
  message: "Success",
  data: [
    {
      subject: "mathematics",
      examType: "JAMB",
      examYear: 2010,
      id: uuidv4(),
      questions: [
        {
          correctOption: "C",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "6",
            b: "9",
            c: "12",
            d: "34",
            e: "16",
          },
          question:
            "The volume of a certain sphere is numerically equal to twice its surface area. The diameter of the sphere is:",
          solution:
            "Let’s solve this problem together! The volume of a sphere is given by the formula V=34​πr3\n where r is the radius of the sphere. The surface area of a sphere is given by the formula A=4πr2\nSince the volume of the sphere is numerically equal to twice its surface area, we can write the equation: 34​πr3=2(4πr2)\nSolving for r, we get r = 6. Since the diameter of a sphere is twice its radius, the diameter of this sphere is 12.",
        },
        {
          correctOption: "E",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "0.9",
            b: "1",
            c: "0.4",
            d: "0.49",
            e: "0.46",
          },
          question:
            "A bag contains 10 balls of which 3 are red 7 are white. Two balls are drawn at random. Find the probability   of none of the balls is red if the draw is",
          solution:
            "There are 10 balls in the bag, 7 of which are white and 3 of which are red. If two balls are drawn without replacement, then there are 45 possible outcomes.\n\nThe probability of drawing two white balls is 7C2 / 10C2 = 21/45 = 7/15.\n\nTherefore, the probability of none of the balls being red when drawing two balls without replacement is 7/15. or 0.466",
        },
        {
          correctOption: "C",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "36",
            b: "9",
            c: "18",
            d: "20",
            e: "21",
          },
          question:
            "A regular polygon has each of its angles at 160. What is the number of sides of the polygon?",
          solution:
            "The number of sides of the polygon is 18.\n\nThe sum of the interior angles of a polygon is (n-2)*180, where n is the number of sides. If each interior angle is 160 degrees, then (n-2)*180 = 160n. Solving for n, we get n = 18.\n\nTherefore, the polygon has 18 sides.",
        },
        {
          correctOption: "D",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "0.019",
            b: "0.0019",
            c: "0.0268",
            d: "0.000019",
            e: "0.0000000008",
          },
          question: "The value of (0.303)3 – (0.02)3 is ",
          solution:
            "(0.303)3 = (303 x 10^-3)3 = 27441 x 10^-9\n\n(0.02)3 = (2 x 10^-2)3 = 8 x 10^-6\n\n27441 x 10^-9 - 8 x 10^-6 = 0.000019",
        },
        {
          correctOption: "D",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "2",
            b: "3.5",
            c: "5",
            d: "5.5",
            e: "0.66",
          },
          question:
            "Z is partly constant and partly varies inversely as the square of d. when d = 1, z = 11 and when d = 2, z = 5. Find the value of z when d = 4.",
          solution: "",
        },
        {
          correctOption: "C",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "N 6",
            b: "N 7",
            c: "N 8",
            d: "N 10",
            e: "N 10",
          },
          question:
            "When the price of an egg was raised by N2 an egg, the number of eggs which can be bought for N 120 is reduced by 5. The present price of an egg is",
          solution:
            "Let x be the original price of an egg.\n\n120/x - 120/(x+2) = 5\n\n120(x+2) - 120x = 5(x(x+2))\n\n240 = 5x^2 + 10x\n\n5x^2 + 10x - 240 = 0\n\n(x-8)(5x+30) = 0\n\nx = 8 or x = -30/5\n\nSince x cannot be negative, the present price of an egg is 8 naira.",
        },
        {
          correctOption: "C",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "(-1,-2)",
            b: "(1, 2)",
            c: "(-1, 2)",
            d: "(1, -2)",
            e: "(1, -2)",
          },
          question:
            "What is the coordinate of the center of the circle X2+y2+2x-4y=10?",
          solution:
            "To find the center of the circle given by the equation x^2 + y^2 + 2x - 4y = 10, we can rewrite the equation in the standard form of a circle, (x - h)^2 + (y - k)^2 = r^2. By completing the square for x and y terms, we get (x + 1)^2 + (y - 2)^2 = 15. The coordinates of the center are (-1, 2).",
        },
        {
          correctOption: "C",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "6",
            b: "x",
            c: "-x",
            d: "0",
            e: "0",
          },
          question: "Given f(x) = 3 + x and g(x) = 3 - x, find g(f(x)).",
          solution:
            "f(x) = 3 + x\ng(x) = 3 - x\n\nSubstituting f(x) into g(x):\ng(f(x)) = 3 - (3 + x)\n\nSimplifying:\ng(f(x)) = 3 - 3 - x\n\nCombining like terms:\ng(f(x)) = -x\n\nTherefore, g(f(x)) simplifies to -x.",
        },
        {
          correctOption: "D",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "8 years",
            b: "10.5 years",
            c: "1 year",
            d: "12.5 years",
            e: "12.5 years",
          },
          question:
            "How long will it take a sum of money invested at 8% simple interest to double the original sum?",
          solution:
            "I = Prt\n where I is the interest earned, P is the principal (original sum), r is the interest rate (expressed as a decimal), and t is the time (in years) for which the money is invested.\nIn this case, we want to find the time it takes for the interest earned to be equal to the original sum, so we have: P = Prt\n\nSolving for t, we get: t = Pr/P\n\nSince the interest rate is 8%, we have r = 0.08. So the time it takes for the money to double is: t = 0.08 / 1 = 12.5 years.",
        },
        {
          correctOption: "D",
          examType: "JAMB",
          examYear: 2010,
          id: uuidv4(),
          image: "",
          option: {
            a: "11",
            b: "8",
            c: "12",
            d: "22",
            e: "22",
          },
          question: "Evaluate x in base 3 if 41x - 22x = 17x.",
          solution:
            "To evaluate the value of x in base 3, we need to solve the equation 41x - 22x = 17x.\n\nLet's break down the equation:\n\n41x - 22x = 17x\n\nCombining like terms:\n\n(4 - 2)1x = 1 * 7x\n\n2x = 7x\n\nSubtracting 2x from both sides:\n\n0 = 7x - 2x\n\nSimplifying:\n\n0 = 5x\n\nSince 5x equals 0, we can conclude that x must be 0.\n\nTherefore, in base 3, x is equal to 0.",
        },
      ],
    },

    {
      subject: "physics",
      examType: "JAMB",
      examYear: 2010,
      id: uuidv4(),
      questions: [
        {
          id: uuidv4(),
          question:
            "If the force on a charge of 0.2 Coulomb in an electric field is 4N, then electric intensity of the field is ",
          option: {
            a: "0.8",
            b: "0.8N/C",
            c: "20.0 N/C",
            d: "4.2N/C",
            e: "4.2N/C",
          },
          solution:
            "Electric Intensity (E) = Force (F) / Charge (Q)\n\nGiven:\nForce (F) = 4 N\nCharge (Q) = 0.2 C\n\nSubstituting the values into the formula:\n\nE = 4 N / 0.2 C\n\nSimplifying:\n\nE = 20 N/C",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "C",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "The superposition of two or more waves to produce a maximum or zero effect at a point is known as: ",
          option: {
            a: "reflection ",
            b: "refraction ",
            c: "diffraction ",
            d: "interference",
            e: "interference",
          },
          solution:
            "The superposition of two or more waves to produce a maximum or zero effect at a point is known as interference",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "C",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "The ice and steam point of a thermometer are 20mm and 100mm respectively: A temperature of 75oC correspond to Ymm on the thermometer. What is Y?",
          option: {
            a: "100mm ",
            b: "70mm ",
            c: "80mm",
            d: "60mm",
            e: "75mm",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "E",
          image: "",
        },
        {
          id: uuidv4(),
          question: "What is the dimension of pressure?",
          option: {
            a: "ML-1T-2 ",
            b: "MLT-2 ",
            c: "ML2T-3 ",
            d: "ML-3",
            e: "ML-3",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "A",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "Dry air of column length 10 cm is trapped by a pellet of mercury of length 15 cm, with the open end uppermost. When the capillary is inverted the length of the air column increased to 25 cm while that of mercury remained constant. Calculate the atmospheric pressure (in cm of Hg.) ",
          option: {
            a: "35 cm Hg  ",
            b: "15 cm Hg  ",
            c: "20 cm Hg ",
            d: "35 cm Hg ",
            e: "35 cm Hg ",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "D",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "The silver wall of a vacuum flask prevents heat loss due to",
          option: {
            a: "conduction ",
            b: "Covection ",
            c: "Radiation",
            d: "Diffraction",
            e: "Diffraction",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "C",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "A transformer is connected to a 240 V supply. The primary coil has 40 turns, and the secondary is found to be 960V. What is the ratio of the number of turns of the primary coil to the number of turns of the secondary coil? ",
          option: {
            a: "4:01 ",
            b: "1:04 ",
            c: "1:06",
            d: "6:01",
            e: "6:01",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "A",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "An air column 10cm in length is trapped into the sealed end of a capillary tube by a 15cm column of mercury with the tube held vertically. On inverting the tube, the air column becomes 15cm long, what is the atmospheric pressure during the experiment?",
          option: {
            a: "70cm ",
            b: " 75cm",
            c: "60cm",
            d: "70cm",
            e: "70cm",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "B",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "The speed of light in air is 3 x 108ms-1. If the refractive index of light from air to water is 4/3, calculate the speed of light in water",
          option: {
            a: " 2.25 x 108ms-2",
            b: "2.25ms-1  ",
            c: "4.00ms-1",
            d: "4.33ms-1",
            e: "4.33ms-1",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "C",
          image: "",
        },
        {
          id: uuidv4(),
          question:
            "A machine has a velocity ratio of 5, if it requires a 50kg weight to overcome 200kg weight, the efficiency is? ",
          option: {
            a: "4% ",
            b: " 5%",
            c: "40%",
            d: "80%",
            e: "80%",
          },
          solution: "",
          examType: "JAMB",
          examYear: 2010,
          correctOption: "D",
          image: "",
        },
      ],
    },
  ],
};
