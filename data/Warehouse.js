var warehouse = {
    capacity: 10,
    speed: 1,
    rank: 1,
    used: 0,
    level: 1,
    upgradeCrates: 0,
    upgradesNeeded: 5
}

var autoContract = false

var warehouseStats = {
    strength: 1,
    defense: 1,
    dojoAttack: 1,
    dojoDefense: 1,
    farmDrop: 1,
    Mining: 1,
}

var choosableContracts = [

]

const Contrats = [
    [
        {
            gold: 10,
            clones: 5,
            time: 300,
            type: "Strength",
            bonus: 0.01
        },
        {
            gold: 10,
            clones: 5,
            time: 300,
            type: "Defense",
            bonus: 0.01
        },
        {
            gold: 5,
            clones: 10,
            time: 600,
            type: "Upgrade",
            bonus:1
        }
    ],
    [
        {
            gold: 40,
            clones: 5,
            time: 1200,
            type: "Strength",
            bonus: 0.05
        },
        {
            gold: 40,
            clones: 5,
            time: 1200,
            type: "Defense",
            bonus: 0.05
        },
        {
            gold: 90,
            clones: 2,
            time: 1800,
            type: "DojoAttack",
            bonus: 0.10
        },
        {
            gold: 90,
            clones: 2,
            time: 1800,
            type: "DojoDefense",
            bonus: 0.10
        },
        {
            gold: 50,
            clones: 10,
            time: 1500,
            type: "Upgrade",
            bonus:5
        }
    ],
    [
        {
            gold: 400,
            clones: 50,
            time: 6000,
            type: "Strength",
            bonus: 0.25
        },
        {
            gold: 400,
            clones: 50,
            time: 6000,
            type: "Defense",
            bonus: 0.25
        },
        {
            gold: 1000,
            clones: 50,
            time: 10800,
            type: "DojoAttack",
            bonus: 0.25
        },
        {
            gold: 1000,
            clones: 50,
            time: 10800,
            type: "DojoDefense",
            bonus: 0.25
        },
        {
            gold: 1000,
            clones: 100,
            time: 4500,
            type: "Upgrade",
            bonus:10
        },
        {
            gold: 1000,
            clones: 50,
            time: 3600,
            type: "FarmDrops",
            bonus: 0.1
        },
        {
            gold: 1000,
            clones: 50,
            time: 3600,
            type: "Mining",
            bonus: 0.1
        }
    ],
    [
        {
            gold: 1500,
            clones: 50,
            time: 18000,
            type: "Strength",
            bonus: 0.5
        },
        {
            gold: 1500,
            clones: 50,
            time: 18000,
            type: "Defense",
            bonus: 0.5
        },
        {
            gold: 3000,
            clones: 50,
            time: 18000,
            type: "DojoAttack",
            bonus: 0.5
        },
        {
            gold: 3000,
            clones: 50,
            time: 18000,
            type: "DojoDefense",
            bonus: 0.5
        },
        {
            gold: 2000,
            clones: 100,
            time: 6000,
            type: "Upgrade",
            bonus:15
        },
        {
            gold: 5000,
            clones: 100,
            time: 36000,
            type: "FarmDrops",
            bonus: 0.5
        },
        {
            gold: 5000,
            clones: 100,
            time: 36000,
            type: "Mining",
            bonus: 0.5
        }
    ],
    [
        {
            gold: 5000,
            clones: 500,
            time: 18000,
            type: "Strength",
            bonus: 2
        },
        {
            gold: 5000,
            clones: 500,
            time: 18000,
            type: "Defense",
            bonus: 2
        },
        {
            gold: 5000,
            clones: 100,
            time: 18000,
            type: "DojoAttack",
            bonus: 1
        },
        {
            gold: 5000,
            clones: 100,
            time: 18000,
            type: "DojoDefense",
            bonus: 1
        },
        {
            gold: 5000,
            clones: 100,
            time: 10000,
            type: "Upgrade",
            bonus:25
        },
        {
            gold: 10000,
            clones: 100,
            time: 72000,
            type: "FarmDrops",
            bonus: 2
        },
        {
            gold: 10000,
            clones: 100,
            time: 72000,
            type: "Mining",
            bonus: 2
        }
    ]
]