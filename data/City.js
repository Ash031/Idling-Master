var selectedBuilding = "TownHall";

var city = {
    clones: 0
}

var coinTosses = 1

var wishingText = ""

var wishingStats = {
    strength: 1,
    defense: 1,
    HP: 1,
    mining: 1,
    farm: 1,
    warehouseSpeed: 1
}

const wellRewards=[
    {
        desc: "The Well Thanked you!",
        type:"None",
        bonus:0
    },
    {
        desc: "The Well threw a coin back at you, just like a mirror!",
        type:"Money",
        bonus:2
    },
    {
        desc: "The Well reflected your image, you look buff Louise!",
        type:"Strength",
        bonus:1
    },
    {
        desc: "The Well threw you a used wet shoe!",
        type:"Defense",
        bonus:1
    },
    {
        desc: "The Well have eaten the coin and give you HP!",
        type:"HP",
        bonus:2
    },
    {
        desc: "The Well threw you a pickaxe!",
        type:"Mining",
        bonus:1
    },
    {
        desc: "The Well feels fed!",
        type:"Farm",
        bonus:1
    },
    {
        desc: "The Well feels like a contractor!",
        type:"Warehouse",
        bonus:1
    },
    {
        desc: "The Well feels empowered with your money!",
        type:"None",
        bonus:0
    },
    {
        desc: "The Well is Happy and feels strong!",
        type:"Strength",
        bonus:3
    },
    {
        desc: "The Well think you look better like a square!",
        type:"Defense",
        bonus:3
    },
    {
        desc: "The Well Strengthen your Heart Power!",
        type:"HP",
        bonus:5
    },
    {
        desc: "The Well likes your persistence!",
        type:"Rebirth",
        bonus:0.1
    }
]

var cityBuildings = [
    {
        name: "Townhall",
        lvl: 0,
        bonus: 0.05,
        cost: 100000,
        time: 3.6e10,
        curTime: 3.6e10,
        paid: false,
        working: false,
        type: "Money"
    },
    {
        name : "Contruction Office",
        lvl: 0,
        bonus: 0.05,
        cost: 500000,
        time: 3.6e10,
        curTime: 3.6e10,
        paid: false,
        working: false,
        type: "CityTime"
    },
    {
        name: "Housing Facilities",
        lvl: 0,
        bonus: 0.5,
        cost: 1000000,
        time: 7.2e10,
        curTime: 7.2e10,
        paid: false,
        working: false,
        type: "ClonesAmount"
    },
    {
        name: "Quarry",
        lvl: 0,
        bonus: 0.5,
        cost: 1e8,
        time: 1.08e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "Strength"
    },
    {
        name: "Food Producers",
        lvl: 0,
        bonus: 0.5,
        cost: 1e8,
        time: 1.08e8,
        curTime: 1.08e8,
        paid: false,
        working: false,
        type: "Defense"
    },
    {
        name: "Clothing Shop",
        lvl: 0,
        bonus: 1,
        cost: 1e8,
        time: 1.08e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "HP"
    },
    {
        name: "Bank",
        lvl: 0,
        bonus: 100,
        cost: 2e8,
        time: 7.2e10,
        curTime: 7.2e10,
        paid: false,
        working: false,
        type: "PassiveGold"
    },
    {
        name: "Outpost",
        lvl: 0,
        bonus: 0.5,
        cost: 1e8,
        time: 1.08e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "Dojo"
    },
    {
        name: "Bulletin Board",
        lvl: 0,
        bonus: 0.1,
        cost: 1e9,
        time: 1.8e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "Bounty"
    },
    {
        name: "Wishing Well",
        lvl: 0,
        bonus: 0.1,
        cost: 1e9,
        time: 1.8e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "Wishing"
    },
    {
        name: "Kiosk",
        lvl: 0,
        bonus: 0.1,
        cost: 1e9,
        time: 1.8e11,
        curTime: 1.08e11,
        paid: false,
        working: false,
        type: "Luck"
    }
]