var selectedBuilding = "TownHall";

var city = {
    clones: 0
}

var cityBuildings = [
    {
        name: "Townhall",
        lvl: 0,
        bonus: 0.05,
        cost: 100,
        time: 3.6e7,
        curTime: 3.6e7,
        paid: false,
        working: false,
        type: "CityMoney"
    },
    {
        name : "Contruction Office",
        lvl: 0,
        bonus: 0.05,
        cost: 500,
        time: 3.6e7,
        curTime: 3.6e7,
        paid: false,
        working: false,
        type: "CityTime"
    },
    {
        name: "Housing Facilities",
        lvl: 0,
        bonus: 0.5,
        cost: 1000,
        time: 7.2e7,
        curTime: 7.2e7,
        paid: false,
        working: false,
        type: "ClonesAmount"
    },
    {
        name: "Food Producers",
        lvl: 0,
        bonus: 0.5,
        cost: 1e5,
        time: 1.08e8,
        curTime: 1.08e8,
        paid: false,
        working: false,
        type: "Defense"
    },
    {
        name: "Quarry",
        lvl: 0,
        bonus: 0.5,
        cost: 1e5,
        time: 1.08e8,
        curTime: 1.08e8,
        paid: false,
        working: false,
        type: "Strength"
    },
    {
        name: "Bank",
        lvl: 0,
        bonus: 100,
        cost: 2e5,
        time: 7.2e7,
        curTime: 7.2e7,
        paid: false,
        working: false,
        type: "PassiveGold"
    },
    {
        name: "Outpost",
        lvl: 0,
        bonus: 0.5,
        cost: 1e5,
        time: 1.08e8,
        curTime: 1.08e8,
        paid: false,
        working: false,
        type: "Dojo"
    }
]

cityStats = {
    strength :1,
    defense: 1,
    mining: 1,
    dojoA: 1,
    dojoD: 1,
    farm: 1,
    warehouse:1,
    moneyMult: 1
}