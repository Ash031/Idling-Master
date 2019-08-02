var werehouse = {
    capacity: 10,
    speed: 1,
    rank: 1,
    used: 0,
    level: 1,
    upgradeCrates: 0,
    upgradesNeeded: 5
}

var werehouseStats = {
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
            gold: 30,
            clones: 2,
            time: 600,
            type: "DojoAttack",
            bonus: 0.02
        },
        {
            gold: 30,
            clones: 2,
            time: 600,
            type: "DojoDefense",
            bonus: 0.02
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
    ]
]