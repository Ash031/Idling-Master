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
        prize : 10
    },
    {
        name : 'Bert, the Bartender',
        hp : 200,
        attack : 20,
        defense : 20,
        prize : 15
    },
    {
        name : 'Manny, the Pale Visitor',
        hp : 100,
        attack : 35,
        defense : 10,
        prize : 18
    },
    {
        name : 'Grodor, The Free Man',
        hp : 200,
        attack : 50,
        defense : 10,
        prize : 20
    },
]

var stats = {
    totalBossesKilles : 0,
    totalDojoEnemies : 0,
    totalSeconds : 0
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