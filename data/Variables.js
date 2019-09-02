var version = "1.1"

var shopAmount = 1;

var statsPage=""

var rebirthPage = 0;

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

var rebirth = {
    canRebirth: false,
    rbPoints:0
}


var stats = {
    totalBossesKilles : 0,
    totalDojoEnemies : 0,
    totalSeconds : 0,
    totalOresMined : 0,
    highestBoss: 0,
    totalCropsGrown : 0,
    totalRankUpsWarehouse: 0,
    totalContractsDone: 0,
    totalArenaBosses: 0
}

var lifeStats = {
    totalBossesKilles : 0,
    totalDojoEnemies : 0,
    totalSeconds : 0,
    totalOresMined : 0,
    totalCropsGrown : 0,
    totalRankUpsWarehouse: 0,
    totalContractsDone: 0,
    totalArenaBosses: 0
}

var rebirthPerks = [
    {
        name:"Cloning Machine",
        basePrice:5,
        lvl:0,
        step:"*1",
        Description:"Starts the Regroup with 3 extra clones",
        Bonus:3,
        boss:5,
        maxLevel:50,
        type: "StartClones"
    },
    {
        name:"Stronger Muscles",
        basePrice:10,
        lvl:0,
        step:"*1",
        Description:"Your strength goes up by 30% each Upgrade",
        Bonus:0.3,
        boss:5,
        maxLevel:-1,
        type: "Strength"
    },
    {
        name:"Harder Guts",
        basePrice:10,
        lvl:0,
        step:"*1",
        Description:"Your defense goes up by 30% each Upgrade",
        Bonus:0.3,
        boss:5,
        maxLevel:-1,
        type: "Defense"
    },
    {
        name:"Money Maker",
        basePrice:10,
        lvl:0,
        step:"*1",
        Description:"You get 25% more money each Upgrade",
        Bonus:0.25,
        boss:5,
        maxLevel:-1,
        type: "MoneyMult"
    },
    {
        name:"Apples For Days",
        basePrice:10,
        lvl:0,
        step:"*1",
        Description:"You get 100% more HP each Upgrade",
        Bonus:1,
        boss:5,
        maxLevel:-1,
        type: "HP"
    },
    {
        name:"XRay Vision",
        basePrice:10,
        lvl:0,
        step:"^1",
        Description:"You have 10% chance to deal double damage",
        Bonus:0.1,
        boss:5,
        maxLevel:10,
        type:"CritChance"
    },
    {
        name:"Mining Expert",
        basePrice:100,
        lvl:0,
        step:"*2",
        Description:"You get 10% more ores",
        Bonus:0.1,
        boss:7,
        maxLevel:-1,
        type: "Mining"
    },
    {
        name:"Better Equipment",
        basePrice:250,
        lvl:0,
        step:"^1",
        Description:"Double your mining Income",
        Bonus:1,
        boss:13,
        maxLevel:10,
        type: "Mining"
    },
    {
        name:"Farming Master",
        basePrice:10,
        lvl:0,
        step:"*1",
        Description:"Your plots weild 10% more crops",
        Bonus:0.1,
        boss:13,
        maxLevel:-1,
        type: "FarmDrops"
    },
    {
        name:"Plot Learner",
        basePrice:10,
        lvl:0,
        step:"^1",
        Description:"Your plots starts at a level higher",
        Bonus:1,
        boss:13,
        maxLevel:-1,
        type: "PlotLvl"
    },
    {
        name:"Seeding Frenzy",
        basePrice:200,
        lvl:0,
        step:"*2",
        Description:"Your plots gain 10% more experience",
        Bonus:0.1,
        boss:13,
        maxLevel:-1,
        type: "FarmXP"
    },
    {
        name:"Warehouse Flipper",
        basePrice:500,
        lvl:0,
        step:"*2",
        Description:"You get 10% more space per Warehouse Rank",
        Bonus:0.1,
        boss:20,
        maxLevel:-1,
        type: "WarehouseSpace"
    },
    {
        name:"Building Master",
        basePrice:1000,
        lvl:0,
        step:"^1",
        Description:"You need 1 less Warehouse Upgrade per rank",
        Bonus:1,
        boss:20,
        maxLevel:2,
        type: "WarehouseCrateRed"
    },
    {
        name:"Contract Supervisor",
        basePrice:500,
        lvl:0,
        step:"*2",
        Description:"You need 1% less time to complete Contracts",
        Bonus:0.01,
        boss:20,
        maxLevel:20,
        type: "ContractTimeRed"
    },
    {
        name:"Contract Supervisor's Friend",
        basePrice:1000,
        lvl:0,
        step:"*2",
        Description:"You get an extra 5% contract Speed",
        Bonus:0.05,
        boss:20,
        maxLevel:10,
        type: "ContractSpeed"
    },
    {
        name:"Robotic Contractor",
        basePrice:1000,
        lvl:0,
        step:"*2",
        Description:"You can automate Contracts",
        Bonus:1,
        boss:20,
        maxLevel:1,
        type: "AutoContract"
    },
    {
        name:"Builders",
        basePrice:1000,
        lvl:0,
        step:"*2",
        Description:"The builders will take half the time to build stuff",
        Bonus:1,
        boss:25,
        maxLevel:1,
        type: "CitySpeed"
    },
    {
        name:"More Bounties",
        basePrice:100,
        lvl:0,
        step:"^1",
        Description:"You get an extra Bounty per regroup",
        Bonus:1,
        boss:25,
        maxLevel:5,
        type: "ExtraBounty"
    },
    {
        name:"Discount Architect",
        basePrice:100,
        lvl:0,
        step:"*1",
        Description:"You get 1% Discount in buildings",
        Bonus:0.01,
        boss:25,
        maxLevel:25,
        type: "CityDiscount"
    },
]

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
    prize : 0,
    rarity: 1
}

var options = {
    menu : 'none',
    interval : 1000,
    help : false,
    number: 0
}

var values = {
    boss:1,
    zone : 0
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

