
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
        desc : 'Some more stuff to collect, there is also a weird room here called \'Miner\'s Heaven\', I better check it out (Mining and Arena Unlocked)!',
        enemies : [7,8,9]
    },
    {
        name : 'Kids\' Room',
        desc : 'You just found out there are some kids entering and leaving a room, after sending them away you decide to go in',
        enemies : [10,11,12,13]
    },
    {
        name : 'Garden',
        desc : 'Connected to the room you find an entrance to a backyard farm, seems like it is yours now (Farming Unlocked)!',
        enemies : [18,19,20,21,22]
    },
    {
        name : 'Kitchen',
        desc : 'There seems to be a kitchen connected to the first corridor and you decide to go in, there you can find a Fridge, and the fridge is empty, someone has to pay for your meal!',
        enemies : [14,15,16,17]
    },
    {
        name : 'Storage',
        desc : 'The last room on the corridor seems to be a srotage filled with computers and shelves, you decide to steal one and start a company (Warehouse Unlocked)!',
        enemies : [23,24,25]
    },
    {
        name : 'Second Corridor',
        desc : 'Seems like you finally made progress and found a great room, another Corridor!',
        enemies : [26,27,28,29]
    },
    {
        name : 'Open Field',
        desc : 'Seems like the second Room have a door to the outside, the field is big and almost flat, good to let your clones rest, and prosper (City Unlocked)!',
        enemies : [30,31,32,33,34]
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
        hp : 400000,
        attack : 15000,
        defense : 12000,
        prize : 130
    },
    {
        name : 'Knifu',
        hp : 100000,
        attack : 50000,
        defense : 2000,
        prize : 140
    },
    {
        name : 'Hatchet',
        hp : 15000,
        attack : 5000,
        defense : 15000,
        prize : 110
    },
    {
        name : 'Gluttony',
        hp : 70000,
        attack : 1000,
        defense : 25000,
        prize : 150
    },
    {
        name : 'BoatCow, the Ghost Cow',
        hp : 15000,
        attack : 1500,
        defense : 1000,
        prize : 90
    },
    {
        name : 'Joergan, the Ghost Horse',
        hp : 5000,
        attack : 1100,
        defense : 1500,
        prize : 80
    },
    {
        name : 'Sven, the Immortal Dog',
        hp : 30000,
        attack : 500,
        defense : 9999,
        prize : 90
    },
    {
        name : 'WaterSheep, The Idol',
        hp : 35000,
        attack : 5000,
        defense : 9000,
        prize : 80
    },
    {
        name : 'PeePeePooPoo Army',
        hp : 50000,
        attack : 1000,
        defense : 100000,
        prize : 120
    },
    {
        name : 'NeckBeard, the Pirate',
        hp : 1.5e5,
        attack : 2.5e4,
        defense : 1.2e4,
        prize : 150
    },
    {
        name : 'Carl, the Bloody Janitor',
        hp : 3e5,
        attack : 1.5e4,
        defense : 4e5,
        prize : 200
    },
    {
        name : 'Laura Crafter, the Storage Raider',
        hp : 9e4,
        attack : 5e4,
        defense : 2e4,
        prize : 150
    },
    {
        name : 'Mixxer, the Bar Lady',
        hp : 7e5,
        attack : 9e4,
        defense : 7e4,
        prize : 210
    },
    {
        name : 'Doctor Weird, the Architech',
        hp : 1e6,
        attack : 7e4,
        defense : 3e5,
        prize : 230
    },
    {
        name : 'Big, the Dog',
        hp : 3e6,
        attack : 1e5,
        defense : 1e5,
        prize : 235
    },
    {
        name : 'HardBoiled, the Giant Talking Chicken',
        hp : 5e5,
        attack : 5e5,
        defense : 8e4,
        prize : 250
    },
    {
        name : 'Smilling Cow',
        hp : 5e6,
        attack : 3e5,
        defense : 1e5,
        prize : 270
    },
    {
        name : 'Happy Scarecrow',
        hp : 5e6,
        attack : 2e5,
        defense : 1e5,
        prize : 280
    },
    {
        name : 'Mutated Carrots',
        hp : 1e7,
        attack : 3e5,
        defense : 1e5,
        prize : 290
    },
    {
        name : 'Walking Ent',
        hp : 2e7,
        attack : 5e5,
        defense : 1e5,
        prize : 290
    },
    {
        name : 'Trippy Mouse, the Walking Rat',
        hp : 5e7,
        attack : 1e5,
        defense : 1e6,
        prize : 300
    }
]