
var dojoZones = [
    {
        name : 'Shady Guy',
        desc : '"I heard there is this dojo in town where you can fight people for money, you can go there and fight them, we never know where the next big thing is."',
        enemies : [0]
    },
    {
        name : 'Main Entrance',
        desc : 'You arrive at the dojo and find there some greeting people, maybe they are some of the people that guy told you about, it\'s time to start kicking ass!',
        enemies : [1,2]
    },
    {
        name : 'Main Hallway',
        desc : 'After beating those people at the entrance you decide to go in, maybe you could grab some more \'loot\' from these other workers',
        enemies : [3,4,5,6]
    },
    {
        name : 'First Corridor',
        desc : 'Some more stuff to collect, there is also a weird room here called \'Miner\'s Heaven\', I better check it out (Mining Unlocked)!',
        enemies : [7,8,9]
    },
    {
        name : 'Kids\' Room',
        desc : 'You just found out there are some kids entering and leaving a room, after sending them away you decide to go in',
        enemies : [10,11,12,13]
    },
    {
        name : 'Kitchen',
        desc : 'The Last room somehow was connected to a kitchen, there you can find a Fridge, and the fridge is empty, someone has to pay for your meal!',
        enemies : [14,15,16,17]
    },
    {
        name : 'Garden',
        desc : 'Connected to the kitchen you find an entrance to a backyard farm, seems like it is yours now (Farming Unlocked)!',
        enemies : [14,15,16,17]
    }
]

var enemies = [
    {
        name : 'Shady Guy',
        hp : 1,
        attack : 0,
        defense : 1e300,
        prize : 0
    },
    {
        name : 'John, the Gardener',
        hp : 5,
        attack : 2,
        defense : 0,
        prize : 1
    },
    {
        name : 'Your Taxi Driver',
        hp : 10,
        attack : 1,
        defense : 0,
        prize : 1
    },
    {
        name : 'Lucy, the Greeter',
        hp : 100,
        attack : 30,
        defense : 5,
        prize : 4
    },
    {
        name : 'Bert, the Bartender',
        hp : 200,
        attack : 20,
        defense : 20,
        prize : 6
    },
    {
        name : 'Manny, the Pale Visitor',
        hp : 100,
        attack : 35,
        defense : 10,
        prize : 7
    },
    {
        name : 'Grodor, The Free Man',
        hp : 200,
        attack : 50,
        defense : 10,
        prize : 10
    },
    {
        name : 'Sainik, The Speeding Demon',
        hp : 2000,
        attack : 500,
        defense : 70,
        prize : 20
    },
    {
        name : 'Goat, The Devil\'s Servant',
        hp : 1500,
        attack : 500,
        defense : 150,
        prize : 25
    },
    {
        name : 'CupMan, The Devil\'s Helper',
        hp : 1750,
        attack : 1000,
        defense : 300,
        prize : 30
    },
    {
        name : 'Woodey Lucky, a Wooden Cowboy',
        hp : 3500,
        attack : 7000,
        defense : 150,
        prize : 50
    },
    {
        name : 'Sonichu, The Electric Hedgehog',
        hp : 4000,
        attack : 5000,
        defense : 700,
        prize : 50
    },
    {
        name : 'Power Dangers',
        hp : 7000,
        attack : 9000,
        defense : 1000,
        prize : 80
    },
    {
        name : 'Angry Muscular Jerr',
        hp : 15000,
        attack : 5000,
        defense : 1000,
        prize : 85
    },
    {
        name : 'Gordo Ramses, The egyptian Cook',
        hp : 15000,
        attack : 6000,
        defense : 4000,
        prize : 100
    },
    {
        name : 'Knifu',
        hp : 10000,
        attack : 10000,
        defense : 2000,
        prize : 120
    },
    {
        name : 'Hatchet',
        hp : 15000,
        attack : 5000,
        defense : 5000,
        prize : 90
    },
    {
        name : 'Gluttony',
        hp : 30000,
        attack : 1000,
        defense : 10000,
        prize : 100
    },
    {
        name : 'BoatCow, the Ghost Cow',
        hp : 40000,
        attack : 1500,
        defense : 12000,
        prize : 130
    },
    {
        name : 'Joergan, the Ghost Horse',
        hp : 50000,
        attack : 1100,
        defense : 11000,
        prize : 130
    },
    {
        name : 'Sven, the Immortal Dog',
        hp : 300000,
        attack : 1500,
        defense : 99999,
        prize : 150
    },
    {
        name : 'WaterSheep, The Idol',
        hp : 35000,
        attack : 5000,
        defense : 9000,
        prize : 140
    },
    {
        name : 'PeePeePooPoo Army',
        hp : 300000,
        attack : 10000,
        defense : 100000,
        prize : 200
    }
]