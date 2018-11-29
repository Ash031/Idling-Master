var player = {
    strength : 1,
    hp : 10,
    curhp : 10,
    defense : 1,
    maxClones : 1,
    idleClones : 1,
    baseClones : 1,
    money : 0,
    hpRegen : 1,
    train : {
        mult : 1,
        attack : {
            scream : {
                level : 0,
                progress : 0
            },
            punch : {
                level : 0,
                progress : 0
            },
            kick : {
                level : 0,
                progress : 0
            },
            jumpKick : {
                level : 0,
                progress : 0
            },
            tornadoKick : {
                level : 0,
                progress : 0
            }
        },
        defense : {
            eat : {
                level : 0,
                progress : 0
            },
            rest : {
                level : 0,
                progress : 0
            },
            sleep : {
                level : 0,
                progress : 0
            },
            fall : {
                level : 0,
                progress : 0
            },
            beat : {
                level : 0,
                progress : 0
            }
        }
    }
}

var assignedClones = {
    train : {
        attack : {
            scream : 0,
            punch : 0,
            kick : 0,
            jumpKick : 0,
            tornadoKick : 0
        },
        defense : {
            eat : 0,
            rest : 0,
            sleep : 0,
            fall : 0,
            beat : 0
        }
    }
}

var dojoStats = {
    hp : 10,
    curhp : 10,
    attack : 1,
    defense : 1
}

var dojoEnemy = {
    name : '',
    hp : 0,
    curhp : 0,
    attack : 0,
    defense : 0,
    prize : 0
}

var options = {
    menu : 'none',
    interval : 1000
}

var values = {
    boss:1,
    zone : 0
}

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
    }
]

var enemies = [
    {
        name : 'Shady Guy',
        hp : 1,
        attack : 0,
        defense : 1000,
        prize : 10
    },
    {
        name : 'John, the Gardener',
        hp : 5,
        attack : 3,
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
        hp : 200,
        attack : 50,
        defense : 10,
        prize : 10
    },
    {
        name : 'Goat, The Devil\'s Servant',
        hp : 200,
        attack : 50,
        defense : 10,
        prize : 10
    },
    {
        name : 'CupMan, The Devil\'s Helper',
        hp : 200,
        attack : 50,
        defense : 10,
        prize : 10
    },
]

var stats = {
    totalBossesKilles : 0,
    totalDojoEnemies : 0,
    totalSeconds : 0,
    totalOresMined : 0
}

var curBoss = {
    attack : 10,
    hp : 100,
    curhp : 100
}

var action = {
    attacking : false
}


var pastConsole = "";

var ores = [
    {
        name : 'Coal',
        quant : 0,
        clones : 0,
        mult : 0.01
    },
    {
        name : 'Copper',
        quant : 0,
        clones : 0,
        mult : 0.01
    },
    {
        name : 'Bronze',
        quant : 0,
        clones : 0,
        mult : 0.001
    },
    {
        name : 'Iron',
        quant : 0,
        clones : 0,
        mult : 0.0001
    },
    {
        name : 'Smeltium',
        quant : 0,
        clones : 0,
        mult : 0.00001
    },
    {
        name : 'Radiotium',
        quant : 0,
        clones : 0,
        mult : 0.00001
    },
    {
        name : 'Redium',
        quant : 0,
        clones : 0,
        mult : 0.000001
    },
    {
        name : 'Purplium',
        quant : 0,
        clones : 0,
        mult : 0.000001
    },
    {
        name : 'Hardium',
        quant : 0,
        clones : 0,
        mult : 0.0000001
    },
    {
        name : 'Bedrock',
        quant : 0,
        clones : 0,
        mult : 0.00000001
    },
    {
        name : 'Jigglium',
        quant : 0,
        clones : 0,
        mult : 0.000000001
    },
    {
        name : 'Diamantium',
        quant : 0,
        clones : 0,
        mult : 0.0000000001
    }
]

var crops = [
    {
        id : 1,
        name : 'Weak Apple',
        maxGrowth : 1,
        temp : true,
        stat : 'strength',
        value : 100
    }
]

var farm = {
    unlocked : 1,
    crops : [
        {crop : 0, time : 0},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]
}


var crafting = {
    page : 0,
    items : [
        {
            name : 'Copper Shirt',
            bonus : 'Defense',
            perLevel : 0.05,
            level : 1,
            cost : [
                {
                    ore : 0,
                    baseCost : 5
                },
                {
                    ore : 1,
                    baseCost : 10
                }
            ]
        },
        {
            name : 'Copper Stick',
            bonus : 'Attack',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5
                },
                {
                    ore : 1,
                    baseCost : 10
                }
            ]
        },
        {
            name : 'Bronze Stick',
            bonus : 'Attack',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5
                },
                {
                    ore : 1,
                    baseCost : 30
                },
                {
                    ore : 2,
                    baseCost : 15
                }
            ]
        },
        {
            name : 'Bronze Dagger',
            bonus : 'Attack',
            perLevel : 0.1,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50
                },
                {
                    ore : 2,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Iron BreadStick',
            bonus : 'HP',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 500
                },
                {
                    ore : 3,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Iron Dog',
            bonus : 'Attack',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 3,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Smelted Helmet',
            bonus : 'Defense',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 4,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Smelted Axe',
            bonus : 'Attack',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 4,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Radioactive Soup',
            bonus : 'HP',
            perLevel : 0.25,
            level : 1,
            cost :[
                {
                    ore : 5,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Radioactive Ironed Bronze Rod',
            bonus : 'Mixed',
            perLevel : 0.10,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5000000
                },
                { 
                    ore:2,
                    baseCost: 5000
                },
                { 
                    ore:3,
                    baseCost: 5000000
                },
                {
                    ore : 5,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Red and Purple Axe',
            bonus : 'Attack',
            perLevel : 0.5,
            level : 1,
            cost :[
                { 
                    ore:6,
                    baseCost: 100
                },
                {
                    ore : 7,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Red Shoes',
            bonus : 'Defense',
            perLevel : 0.35,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                { 
                    ore:6,
                    baseCost: 500
                }
            ]
        },
        {
            name : 'Purple Pants',
            bonus : 'Defense',
            perLevel : 0.35,
            level : 1,
            cost :[
                {
                    ore : 0,
                    baseCost : 50000
                },
                { 
                    ore:7,
                    baseCost: 500
                }
            ]
        },
        {
            name : 'Hardened Underpants',
            bonus : 'Attack',
            perLevel : 0.7,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 8,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Hardened Bedrock Wall',
            bonus : 'Defense',
            perLevel : 1,
            level : 1,
            cost :[
                { 
                    ore:8,
                    baseCost: 50000
                },
                {
                    ore : 9,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Gigglium Jelly',
            bonus : 'HP',
            perLevel : 1.15,
            level : 1,
            cost :[
                { 
                    ore:10,
                    baseCost: 50000
                }
            ]
        },
        {
            name : 'Diamond Armor Set',
            bonus : 'Mixed',
            perLevel : 1.2,
            level : 1,
            cost :[
                {
                    ore : 11,
                    baseCost : 10000
                }
            ]
        },
        {
            name : 'Combined Set',
            bonus : 'Mixed',
            perLevel : 1.5,
            level : 1,
            cost :[
                {
                    ore : 7,
                    baseCost : 10000
                },
                {
                    ore : 8,
                    baseCost : 10000
                },
                {
                    ore : 9,
                    baseCost : 10000
                },
                {
                    ore : 10,
                    baseCost : 10000
                },
                {
                    ore : 11,
                    baseCost : 10000
                }
            ]
        }
    ]
}