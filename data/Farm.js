
var cropSelected = 0;

var farmStats = {
    attack:1,
    defense:1,
    mining: 1,
    farmXPMult: 1,
    farmDropMult: 1,
    GoldMult: 1,
    ClonesAmountMult: 1,
    ClonesPowerMult: 1,
    dojoMult: 1,
    hp:1
}

var crops = [
    { 
        name : 'Barley',
        growthTime : 300,
        bonus:0.05,
        type: "Attack",
        unlockAt:1
    },
    {
        name : 'Wheat',
        growthTime : 300,
        bonus:0.05,
        type: "Defense",
        unlockAt:1
    },
    {
        name : 'Potato',
        growthTime : 300,
        bonus:0.10,
        type: "HP",
        unlockAt:1
    },
    { 
        name : 'GoldFlower',
        growthTime : 150,
        bonus:10,
        type: "Gold",
        unlockAt:2
    },
    {
        name : 'Chocolate',
        growthTime : 3000,
        bonus : 0.05,
        type : "Mining",
        unlockAt : 10
    },
    {
        name : 'TumbleWeed',
        growthTime : 12000,
        bonus : 0.01,
        type : "FarmDrop",
        unlockAt : 25
    },
    {
        name : 'SunFlower',
        growthTime : 3000,
        bonus : 0.01,
        type : "GoldMult",
        unlockAt : 40
    },
    {
        name : 'SameFlower',
        growthTime : 6000,
        bonus : 0.03,
        type : "CloneAmount",
        unlockAt : 50
    },
    {
        name : 'BuffedShroom',
        growthTime : 12000,
        bonus : 0.02,
        type : "ClonePower",
        unlockAt : 65
    },
    {
        name : 'GMO Barley',
        growthTime : 600,
        bonus : 0.15,
        type : "Attack",
        unlockAt : 75
    },
    {
        name : 'GMO Wheat',
        growthTime : 600,
        bonus : 0.15,
        type : "Defense",
        unlockAt : 75
    },
    {
        name : 'Apples of Adam',
        growthTime : 6000,
        bonus : 0.01,
        type : "Dojo",
        unlockAt : 100
    }
]

var plots = [
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
    {
        got:false,
        curTime:0,
        xp:0,
        level:0,
        crop:-1
    },
]


