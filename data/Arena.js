var arenaVouchers = 1

var arenaScreen = ""
var arenaType = ""

var arenaEnemy = {
    attack:0,
    maxhealth: 0, 
    curhealth: 0,
    type: 0,
    name: "",
    gain: 0
}
var arenaSelf = {
    attack: 0,
    maxhealth: 0,
    curhealth: 0
}

var skills = [
    {
        name: "Punch",
        type: 0,
        mult: 1,
        desc: "A Regular Punch",
        effect: "",
        got: true,
        coolDown: 0,
        price: 0
    },
    {
        name: "Kick",
        type: 0,
        mult: 2,
        desc: "Stronger than a Punch",
        effect: "",
        got: false,
        coolDown: 2,
        price: 60
    },
    {
        name: "HeadButt",
        type: 1,
        mult: 2,
        desc: "Swing Your head",
        effect: "",
        got: false,
        coolDown: 3,
        price: 200
    },
    {
        name: "Elbow Thrust",
        type: 3,
        mult: 2,
        desc: "One of a Kind",
        effect: "",
        got: false,
        coolDown: 3,
        price: 200
    },
    {
        name: "FacePalm",
        type: 2,
        mult: 2,
        desc: "You hit him, with some force",
        effect: "",
        got: false,
        coolDown: 3,
        price: 200
    },
    {
        name: "Rocket Punch",
        type: 0,
        mult: 5,
        desc: "Just like the simulations",
        effect: "",
        got: false,
        coolDown: 10,
        price: 1000
    },
    {
        name: "Paper Cuts",
        type: 2,
        mult: 5,
        desc: "You put a paper in between your enemy fingers.",
        effect: "",
        got: false,
        coolDown: 8,
        price: 20000
    },
    {
        name: "Rock Throw",
        type: 1,
        mult: 5,
        desc: "Why punch if you can hit from far away?",
        effect: "",
        got: false,
        coolDown: 8,
        price: 20000
    },
    {
        name: "Spider Arms",
        type: 3,
        mult: 5,
        desc: "Spiders can hold so many stuff, like scissors!",
        effect: "",
        got: false,
        coolDown: 8,
        price: 20000
    },
    {
        name: "Salt",
        type: 0,
        mult: 0,
        desc: "Nothing better than some salt on your wonds!",
        effect: "Heal 50",
        got: false,
        coolDown: 4,
        price: 200000
    },
]

var skillsChosen = [
    0
]

var coolDowns = [
    0
]

var arenaTokens = {
    dojo: 0,
    mine: 0,
    farm: 0,
    warehouse: 0

}

var arenaShop = {
    dojo: [
        {
            name: "Better Chop",
            desc: "Get an extra 10% attack on Dojo",
            type: "Attack",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "*1",
            basePrice: 1
        },
        {
            name: "Better Guard",
            desc: "Get an extra 10% defense on Dojo",
            type: "Defense",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "*1",
            basePrice: 1
        },
        {
            name: "Extra Arm",
            desc: "Doubles attack on Dojo",
            type: "Attack",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 10
        },
        {
            name: "Rice Diet",
            desc: "Doubles defense on Dojo",
            type: "Defense",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 10
        }
    ],
    mine:[
        {
            name: "New PickAxe",
            desc: "Get extra 10% ores",
            type: "Drop",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "*1",
            basePrice: 1
        },
        {
            name: "Better Hammer",
            desc: "Get 1% Discount on Crafting",
            type: "Crafting",
            Bonus: 0.01,
            lvl: 0,
            maxLvl: 90,
            step: "^1",
            basePrice: 2
        },
        {
            name: "Miner's Salary",
            desc: "Get a Miner for each ore",
            type: "Miner",
            Bonus: 1,
            lvl: 0,
            maxLvl: 10,
            step: "^1",
            basePrice: 5
        },
        {
            name: "Double Income",
            desc: "Doubles Ores",
            type: "Drop",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 10
        }
    ],
    Farm:[
        {
            name: "Better Dirt",
            desc: "Get extra 10% crops",
            type: "Drop",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "*1",
            basePrice: 1
        },
        {
            name: "Smarter Plots",
            desc: "Get 10% extra XP on Farm",
            type: "XP",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "^1",
            basePrice: 2
        },
        {
            name: "Better Fertelizers",
            desc: "Crops takes less 1% time to grow8m",
            type: "TimeTaken",
            Bonus: 0.01,
            lvl: 0,
            maxLvl: 50,
            step: "^1",
            basePrice: 2
        },
        {
            name: "Better Shovel",
            desc: "Doubles Crops",
            type: "Drop",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 10
        },
        {
            name: "Best Shoes",
            desc: "Doubles XP on Farm",
            type: "XP",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 100
        }
    ],
    warehouse:[
        {
            name: "Extra Carriage",
            desc: "Gets an extra contract slot",
            type: "Space",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "*1",
            basePrice: 10
        },
        {
            name: "Good Management",
            desc: "Get 10% extra Multipliers on Warehouse",
            type: "Mult",
            Bonus: 0.1,
            lvl: 0,
            maxLvl: -1,
            step: "*1",
            basePrice: 5
        },
        {
            name: "Chief on the Job",
            desc: "Contracts needs 1 less clone",
            type: "Clones",
            Bonus: 1,
            lvl: 0,
            maxLvl: 1,
            step: "^1",
            basePrice: 20
        },
        {
            name: "Smart Devices",
            desc: "Needs 1 less upgrade crate per rank",
            type: "Crates",
            Bonus: 1,
            lvl: 0,
            maxLvl: 5,
            step: "*1",
            basePrice: 1000
        }
    ]
}

var arenaFighters = {
    dojo : [
        {
            name: "Stickley",
            health: 1e3,
            attack: 2.5e3,
            type: 2,
            defeated: false
        },
        {
            name: "Chaty",
            health: 1e5,
            attack: 7e4,
            type: 1,
            defeated: false
        },
        {
            name: "TrashBags",
            health: 1e8,
            attack: 2e6,
            type: 0,
            defeated: false
        },
    ],
    Mine : [
        {
            name: "HandSawz",
            health: 1e5,
            attack: 1e4,
            type: 3,
            defeated: false
        },
        {
            name: "Boruch",
            health: 1e6,
            attack: 4e5,
            type: 0,
            defeated: false
        }
    ],
    farm : [
        {
            name: "KGnome",
            health: 1e7,
            attack: 2.5e6,
            type: 1,
            defeated: false
        },
        {
            name: "Flowey",
            health: 3e10,
            attack: 3e7,
            type: 2,
            defeated: false
        },
        {
            name: "Poned",
            health: 2e11,
            attack: 4e8,
            type: 1,
            defeated: false
        },
    ],
    warehouse : [
        {
            name: "Catriu",
            health: 3e15,
            attack: 3e15,
            type: 0,
            defeated: false
        },
        {
            name: "Coose",
            health: 5e18,
            attack: 1e17,
            type: 3,
            defeated: false
        }
    ],
}